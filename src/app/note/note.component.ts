import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../data/types';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  @Input() note!: Note;

  constructor() {}

  ngOnInit(): void {}
}
