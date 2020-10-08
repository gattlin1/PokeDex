import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../../../models/pokemon.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: Array<Pokemon>): Array<Pokemon> {
    if (!items) { return []; }

    return items.sort((a, b) => a.id - b.id);
  }

}
