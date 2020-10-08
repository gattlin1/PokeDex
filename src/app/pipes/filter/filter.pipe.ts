import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../../../models/pokemon.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Array<Pokemon>, searchText: string): Array<Pokemon> {
    if (!items) { return []; }
    if (!searchText) { return items; }

    searchText = searchText.toLowerCase();
    return items.filter( (pokemon: Pokemon) => {
      return pokemon.name.toLowerCase().includes(searchText);
    });
  }

}
