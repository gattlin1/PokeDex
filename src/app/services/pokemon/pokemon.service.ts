import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon } from 'src/models/pokemon.model';
import { PokemonContainer } from 'src/models/pokemon-container.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonInfo: { [name: string]: Pokemon} = {};
  private dataRetrieved = false;
  private url = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  // TODO: Sort them
  public getAllPokemon(): Observable<PokemonContainer> {
    if (this.dataRetrieved) {
      return of(this.pokemonInfo);
    }
    else {
      const search = `${this.url}?limit=20&offset=140`; // TODO: change to 807 later
      return this.http.get(search).pipe(map(
        (data: any) => {
          for (const item of data.results) {
            this.getPokemon(item.name).subscribe((pokemon: Pokemon) => {
              this.pokemonInfo[pokemon.name] = pokemon;
            });
          }
          this.dataRetrieved = true;
          return this.pokemonInfo;
        }));
      }
  }

  public getPokemon(name: string): Observable<Pokemon> {
    if (this.pokemonInfo[name]) {
      return of(this.pokemonInfo[name]);
    } else {
      const search = `${this.url}/${name}`;
      return this.http.get(search).pipe(map(
        (data: any) => {
          return new Pokemon(data);
        }
      ));
    }
  }
}
