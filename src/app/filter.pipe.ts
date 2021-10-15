import {Pipe, PipeTransform} from '@angular/core';
import {Note} from './data/types';
import {NgForm} from '@angular/forms';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(notes: Note[], selection: string): Note[] {
    if(!selection) return notes
    return notes.filter(note => note.author === selection);
  }

}
