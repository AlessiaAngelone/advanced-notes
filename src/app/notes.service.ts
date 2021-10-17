import {Injectable, Inject} from '@angular/core';
import {of, Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import { Note } from './data/types';

interface DataResponse {
  data?: any
}

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(@Inject(HttpClient) private http: HttpClient) {
  }

  getNotes() {
    return this.http.get(`assets/data/data.json`).pipe(
      map((response: DataResponse) => {
      const {data} = response;
      const ownNotes = JSON.parse(localStorage.getItem("ownNotes") || '[]');
      return [...data, ...ownNotes].sort((a, b) => (a.createdAt > b.createdAt) ? 1 : -1);
    })
    )
  }

  updateStoredNotes(updatedNotes: Note[]){
    //update own notes saved in local storage
    const ownNotes = updatedNotes.filter(note => note.author.toLowerCase() === 'you');
    localStorage.setItem("ownNotes", JSON.stringify(ownNotes));  }
}
