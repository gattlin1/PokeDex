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
    this.pokemon = [];
  }

  ngOnInit(): void {
    this.pokemonService.getAllPokemon().subscribe((data: any) => {
      this.pokemon = data.sort((a, b) => a.id - b.id);
      console.log(this.pokemon);
    });
  }

  // TODO: Make a pokemon object to replace ordinary object
  public getPokemon(search: string): Array<object> {
    return [];
  }

}
