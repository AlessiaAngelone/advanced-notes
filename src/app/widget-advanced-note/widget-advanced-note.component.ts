import {Component, OnInit, Inject} from '@angular/core';
import {Note} from '../data/types';
import {NotesService} from '../notes.service';

@Component({
  selector: 'app-widget-advanced-note',
  templateUrl: './widget-advanced-note.component.html',
  styleUrls: ['./widget-advanced-note.component.scss'],
  providers: [NotesService]
})
export class WidgetAdvancedNoteComponent implements OnInit {
  notes: Note[] = [];
  authors: Set<string> = new Set<string>();

  constructor(@Inject(NotesService) private notesService: NotesService) {
  }

  ngOnInit(): void {
    //call servise to retreive notes
    this.notesService.getNotes().subscribe((response: Note[]) => {
      this.notes = response;
      //subscribe to every notes updates
      this.notesUpdatesSubscription();
    })
  }

  /**
   * Method to subscribe to notes$ Observable to update note and authors list when a new note arrive
   */
  notesUpdatesSubscription(){
    this.notesService.notes$.subscribe((res) => {
      //notes update received
      this.notes = res;
      this.setAuthors(res);
    })
  }

  /**
   * Method to create author list from available notes
   * @param notes
   */
  setAuthors(notes: Note[]){
    const others = notes
      .map((note) => note.author)
      .filter((author: string) => author.toLowerCase() !== 'you')
    this.authors = new Set(others);
  }

  /**
   * Method that add a new note in notes list and call the update service
   * @param note
   */
  publish(note: any) {
    //update notes
    this.notesService.updateNotes([...this.notes, note])
  }
}
