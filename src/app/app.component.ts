import {Component, Inject} from '@angular/core';
import {Note} from './data/types';
import {NotesService} from './notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NotesService]
})
export class AppComponent {
  notes: Note[] = [];

  constructor(@Inject(NotesService) private notesService: NotesService) {
  }

  ngOnInit(): void {
    this.notesService.getNotes().subscribe((response: Note[]) => {
      this.notes = response
    })
  }
}
