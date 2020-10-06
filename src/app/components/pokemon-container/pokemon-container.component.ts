import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { Pokemon } from '../../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-container',
  templateUrl: './pokemon-container.component.html',
  styleUrls: ['./pokemon-container.component.scss']
})
export class PokemonContainerComponent implements OnInit {
  public pokemon: object;

  constructor(private pokemonService: PokemonService) {
    this.pokemon = [];
  }

  ngOnInit(): void {
    this.pokemonService.getAllPokemon().subscribe((data: Array<Pokemon>) => {
      this.pokemon = data;
      console.log(this.pokemon);
    });
  }

  public getPokemon(search: string): Pokemon {
    return new Pokemon();
  }

}
