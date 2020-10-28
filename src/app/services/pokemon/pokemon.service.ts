import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon } from 'src/models/pokemon.model';
import { PokemonDetailed } from 'src/models/pokemon-detailed.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonInfo: Pokemon[] = [];
  private dataRetrieved: boolean = false;
  private url = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  // TODO: Sort them
  public getAllPokemon(): Observable<Pokemon[]> {
    const search = `${this.url}?limit=20&offset=140`; // TODO: change to 807 later
    if (this.dataRetrieved) {
      return of(this.pokemonInfo);
    }
    else {
      return this.http.get(search).pipe(map(
        (data: any) => {
          for (const item of data.results) {
            this.getPokemon(item.name).subscribe((pokemon: Pokemon) => {
              this.pokemonInfo.push(pokemon);
            });
          }
          this.dataRetrieved = true;
          return this.pokemonInfo;
        }));
      }
  }

  public getPokemon(name: string): Observable<Pokemon> {
    const search = `${this.url}/${name}`;
    return this.http.get(search).pipe(map(
      (data: any) => {
        return new Pokemon(data);
      }
    ));
  }

  public getPokemonDetailed(name: string): Observable<PokemonDetailed> {
    const search = `${this.url}/${name}`;
    return this.http.get(search).pipe(map(
      (data: any) => {
        return new PokemonDetailed(data);
      }
    ));
  }
}
