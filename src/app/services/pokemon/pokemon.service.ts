import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon } from 'src/models/pokemon.model';
import { PokemonDetailed } from 'src/models/pokemon-detailed.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {}
  private url = 'https://pokeapi.co/api/v2/pokemon';

  // TODO: Sort them
  public getAllPokemon(): Observable<Array<Pokemon>> {
    const search = `${this.url}?limit=40`; // TODO: change to 807 later
    return this.http.get(search).pipe(map(
      (data: any) => {
        const pokemonInfo: Array<Pokemon> = [];
        for (const item of data.results) {
          this.getPokemon(item.name).subscribe((pokemon: Pokemon) => {
            pokemonInfo.push(pokemon);
          });
        }
        return pokemonInfo;
    }));
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
