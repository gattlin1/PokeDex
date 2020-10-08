import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { Pokemon } from '../../../models/pokemon.model';
import { FilterService } from 'src/app/services/filter/filter.service';

@Component({
  selector: 'app-pokemon-container',
  templateUrl: './pokemon-container.component.html',
  styleUrls: ['./pokemon-container.component.scss']
})
export class PokemonContainerComponent implements OnInit {
  public pokemon: Array<Pokemon>;
  public filter: string;

  constructor(private pokemonService: PokemonService,
              private filterService: FilterService) {
    this.pokemon = [];
  }

  ngOnInit(): void {
    this.pokemonService.getAllPokemon().subscribe((data: Array<Pokemon>) => {
      this.pokemon = data;
      console.log(this.pokemon);
    });

    this.filterService.userTextObservable.subscribe(x => this.filter = x);
  }
}