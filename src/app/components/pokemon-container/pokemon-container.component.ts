import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { Pokemon } from '../../../models/pokemon.model';
import { FilterService } from 'src/app/services/filter/filter.service';
import { PokemonContainer } from '../../../models/pokemon-container.model';

@Component({
  selector: 'app-pokemon-container',
  templateUrl: './pokemon-container.component.html',
  styleUrls: ['./pokemon-container.component.scss']
})
export class PokemonContainerComponent implements OnInit {
  public pokemon: PokemonContainer = {};
  public filter: string;

  constructor(private pokemonService: PokemonService,
              private filterService: FilterService) {}

  ngOnInit(): void {
    this.pokemonService.getAllPokemon().subscribe((data: PokemonContainer) => {
      this.pokemon = data;
      console.log(this.pokemon);
    });

    this.filterService.userTextObservable.subscribe(x => this.filter = x);
  }
}