import {
  Component,
  OnInit,
  Inject,
  AfterViewInit,
  ViewChildren,
  ViewChild,
} from '@angular/core';
import { Note } from '../data/types';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-widget-advanced-note',
  templateUrl: './widget-advanced-note.component.html',
  styleUrls: ['./widget-advanced-note.component.scss'],
  providers: [NotesService],
})
export class WidgetAdvancedNoteComponent implements OnInit, AfterViewInit {
  notes: Note[] = [];
  authors: Set<string> = new Set<string>();
  @ViewChild('notesChild') notesChild: any;
  @ViewChildren('notesChildren') notesChildren: any;

  constructor(@Inject(NotesService) private notesService: NotesService) {
    // subscribe to notes$ Observable to get updated note
    this.notesUpdatesSubscription();
  }

  ngOnInit(): void {
    // call servise to retreive notes
    // the service will dispatch the updated notes
    this.notesService.getNotes().subscribe();
  }

  ngAfterViewInit(): void {
    // after Angular has fully initialized component's view, fit notes scroll to the last one
    this.notesChildren.changes.subscribe(() => {
      // every time a new note arrive, the view scroll to the last new note
      this.scrollToBottom();
    });
    this.scrollToBottom();
  }

  /**
   * Method to subscribe to notes$ Observable to update note and authors list when a new note arrive
   */
  notesUpdatesSubscription(): void {
    this.notesService.notes$.subscribe((res) => {
      // notes update received
      this.notes = res;
      this.setAuthors(res);
    });
  }

  /**
   * Method to create author list from available notes
   * @param notes: Note[]
   */
  setAuthors(notes: Note[]): void {
    const others = notes
      .map((note) => note.author)
      .filter((author: string) => author.toLowerCase() !== 'you');
    this.authors = new Set(others);
  }

  /**
   *
   * @param note: Note
   */
  publish(note: Note): void {
    // update notes
    this.notesService.updateNotes(note);
  }

  /**
   * Method to fit the notes scroll to the bottom
   */
  scrollToBottom(): void {
    setTimeout(() => {
      try {
        this.notesChild.nativeElement.scrollTop =
          this.notesChild.nativeElement.scrollHeight;
      } catch (err) {}
    }, 0);
  }
}
