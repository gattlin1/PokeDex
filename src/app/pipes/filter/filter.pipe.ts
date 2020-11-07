import { Pipe, PipeTransform } from '@angular/core';
import { PokemonContainer } from 'src/models/pokemon-container.model';
import { Pokemon } from '../../../models/pokemon.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any, searchText: string): PokemonContainer {
    if (!items) { return {}; }
    if (!searchText) { return items; }

    const results: PokemonContainer = {};
    searchText = searchText.toLowerCase();

    for (const name of Object.keys(items)) {
      if (name.toLowerCase().includes(searchText)) {
        results[name] = items[name];
      }
    }
    return results;
  }
}
