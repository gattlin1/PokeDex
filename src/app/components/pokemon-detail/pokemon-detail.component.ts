import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { Pokemon } from 'src/models/pokemon.model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit{
  pokemon: Pokemon;
  pokemonSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon(this.route.snapshot.params.name).subscribe((data) => {
      this.pokemon = data;
      console.log(this.pokemon);
    })
  }
}
