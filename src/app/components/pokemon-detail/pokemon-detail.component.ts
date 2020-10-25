import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { PokemonDetailed } from 'src/models/pokemon-detailed.model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit, OnDestroy {
  pokemon: PokemonDetailed;
  pokemonSubscription: Subscription;
  dataLoaded: Promise<boolean>;

  constructor(private route: ActivatedRoute,
              private pokemonService: PokemonService) {}

  ngOnInit(): void {
    const name = this.route.snapshot.params.name;
    this.pokemonSubscription = this.pokemonService.getPokemonDetailed(name).subscribe((data) => {
      this.pokemon = data;
      this.dataLoaded = Promise.resolve(true);
      console.log(this.pokemon);
    });
  }

  ngOnDestroy(): void {
    this.pokemonSubscription.unsubscribe();
  }
}
