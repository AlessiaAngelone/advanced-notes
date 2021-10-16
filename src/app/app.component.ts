import {Component, Inject} from '@angular/core';
import {Note} from './data/types';
import {NotesService} from './notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  notes: Note[] = [];

  constructor(@Inject(NotesService) notesService: NotesService) {
    notesService.getNotes().subscribe((response: Note[]) => {
      this.notes = response
    })
  }

  ngOnInit(): void {
  }
}
