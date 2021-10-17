import {Pipe, PipeTransform} from '@angular/core';
import {Note} from './data/types';
import {NgForm} from '@angular/forms';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  /**
   * Custom pipe to filter input notes from selection passed in
   * @param notes
   * @param selection
   */
  transform(notes: Note[], selection: string): Note[] {
    if(!selection) return notes
    return notes.filter(note => note.author.toLowerCase() === selection.toLowerCase());
  }

}
