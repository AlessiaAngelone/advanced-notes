import {Component, OnInit, Input, SimpleChanges} from '@angular/core';
import {Note} from '../data/types';

@Component({
  selector: 'app-widget-advanced-note',
  templateUrl: './widget-advanced-note.component.html',
  styleUrls: ['./widget-advanced-note.component.scss']
})
export class WidgetAdvancedNoteComponent implements OnInit {
  @Input() notes!: Note[];
  ownNotes: Note[] = [];
  authors: string[] = [];
  selection: string = '';


  constructor() {
  }

  ngOnInit(): void {
    this.authors = this.notes.map(note => note.author)
    this.ownNotes = JSON.parse(localStorage.getItem("ownNotes") || '[]');
    this.notes = [
      ...this.notes,
      ...this.ownNotes
    ].sort((a, b) => (a.createdAt > b.createdAt) ? 1 : -1);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  publish(note: any) {
    this.ownNotes.push(note);
    let jsonNote = JSON.stringify(this.ownNotes);
    localStorage.setItem("ownNotes", jsonNote);
  }
}
