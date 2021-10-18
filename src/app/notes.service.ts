import { Injectable, Inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Note } from './data/types';

interface DataResponse {
  data?: any;
}

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private notes: Note[] = [];
  private notesSubject = new Subject<Note[]>();
  notes$ = this.notesSubject.asObservable();

  constructor(@Inject(HttpClient) private http: HttpClient) {
    this.notes$.subscribe((res) => {
      console.log('subscriprion', res);
      this.notes = res;
    });
  }

  /**
   * Method to feed a new value to the notes Subject
   * @param value
   */
  setNotes(value: Note[]): void {
    this.notesSubject.next(value);
  }

  /**
   * Method to retreive all notes, provided from backend and localStorage
   */
  getNotes(): Observable<void> {
    return this.http.get(`assets/data/data.json`).pipe(
      map((response: DataResponse) => {
        // extract note from backend
        const { data } = response;
        // retreive own notes from localStorage
        const ownNotes = JSON.parse(localStorage.getItem('ownNotes') || '[]');
        // merge notes with own-notes, then sorte by publishing date (newest at bottom)
        const allNotes = [...data, ...ownNotes].sort((a, b) =>
          a.createdAt > b.createdAt ? 1 : -1
        );
        // dispatch updated notes to all subscribers
        this.setNotes(allNotes);
      })
    );
  }

  /**
   * Method to update own notes in localStorage and trigger updated notes to all subscribers
   * @param newNote
   */
  updateNotes(newNote: Note): void {
    // update all notes with the òast one
    const allNotes = [...this.notes, newNote];
    // update own notes in local storage
    const ownNotes = allNotes.filter(
      (note) => note.author.toLowerCase() === 'you'
    );
    localStorage.setItem('ownNotes', JSON.stringify(ownNotes));
    // dispatch updated notes to all subscribers
    this.setNotes(allNotes);
  }
}
