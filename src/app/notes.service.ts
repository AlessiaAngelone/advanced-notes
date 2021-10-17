import {Injectable, Inject} from '@angular/core';
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Note} from './data/types';

interface DataResponse {
  data?: any
}

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private notes = new Subject<Note[]>();
  notes$ = this.notes.asObservable();

  constructor(@Inject(HttpClient) private http: HttpClient) {
  }

  /**
   * Method to feed a new value to the notes Subject
   * @param value
   */
  setNotes(value: Note[]) {
    this.notes.next(value);
  }

  /**
   * Method to retreive all notes, provided from backend and localStorage
   */
  getNotes() {
    return this.http.get(`assets/data/data.json`).pipe(
      map((response: DataResponse) => {
        //extract note from backend
        const {data} = response;
        //retreive own notes from localStorage
        const ownNotes = JSON.parse(localStorage.getItem("ownNotes") || '[]');
        //return merged notes with own-notes, then sorted by publishing date (newest at bottom)
        return [...data, ...ownNotes].sort((a, b) => (a.createdAt > b.createdAt) ? 1 : -1);
      })
    )
  }

  /**
   * Method to update own notes in localStorage and trigger updated notes to all subscribers
   * @param updatedNotes
   */
  updateNotes(updatedNotes: Note[]) {
    //update own notes in local storage
    const ownNotes = updatedNotes.filter(note => note.author.toLowerCase() === 'you');
    localStorage.setItem("ownNotes", JSON.stringify(ownNotes));
    //trigger updated notes to all subscribers
    this.setNotes(updatedNotes);
  }
}
