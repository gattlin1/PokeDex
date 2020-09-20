import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public pokemon: object;

  constructor(private pokemonService: PokemonService) {
    this.pokemon = {};
  }

  ngOnInit(): void {
  }

  // TODO: Make a pokemon object to replace ordinary object
  public getPokemon(search: string): Array<object> {
    search = '';
    this.pokemonService.getPokemon(search).subscribe((data: any) => {
      this.pokemon = data;
    });
    return [];
  }

}
