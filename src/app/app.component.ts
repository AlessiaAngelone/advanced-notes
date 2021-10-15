import {Component} from '@angular/core';
import {Note} from './data/types';
import {NotesService} from './notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  notes: Note[] = [];

  constructor(notesService: NotesService) {
    notesService.getNotes().subscribe((response: string) => {
      this.notes = JSON.parse(response);
    })
  }

  ngOnInit(): void {
  }
}
