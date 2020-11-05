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
export class PokemonDetailComponent implements OnInit, OnDestroy {
  public pokemon: Pokemon;
  public dataLoaded: Promise<boolean>;
  private pokemonSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private pokemonService: PokemonService) {}

  ngOnInit(): void {
   this.getPokemonDetailed();
  }

  public getPokemonDetailed(): void {
    const name = this.route.snapshot.params.name;
    this.pokemonSubscription = this.pokemonService.getPokemon(name).subscribe((data) => {
      this.pokemon = data;
      this.dataLoaded = Promise.resolve(true);
      console.log(this.pokemon);
    });
  }

  ngOnDestroy(): void {
    this.pokemonSubscription.unsubscribe();
  }
}
