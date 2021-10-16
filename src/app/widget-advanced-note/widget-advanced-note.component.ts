import {Component, OnInit, Input, SimpleChanges} from '@angular/core';
import {Note} from '../data/types';
import {NotesService} from '../notes.service';

@Component({
  selector: 'app-widget-advanced-note',
  templateUrl: './widget-advanced-note.component.html',
  styleUrls: ['./widget-advanced-note.component.scss']
})
export class WidgetAdvancedNoteComponent implements OnInit {
  @Input() notes!: Note[];
  authors: Set<string> = new Set<string>();

  constructor(public notesService: NotesService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges({notes}: SimpleChanges) {
    const others = notes.currentValue
      .map((note: Note) => note.author)
      .filter((author: string) => author.toLowerCase() !== 'you')
    this.authors = new Set(others);
  }

  publish(note: any) {
    //update all notes
    this.notes.push(note);
    //update localstorage
    this.notesService.updateStoredNotes(this.notes)
  }
}
