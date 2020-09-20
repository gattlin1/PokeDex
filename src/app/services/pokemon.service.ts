import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {}
  private url = 'https://pokeapi.co/api/v2/pokemon';

  // TODO: Make an actual pokemon object to replace generic object
  public getAllPokemon(): Observable<object> {
    const search = `${this.url}?limit=10`; // change to 807 later
    return this.http.get(search).pipe(map(
      (data: any) => {
        const pokemonInfo: Array<object> = [];
        for (const item of data.results) {
          this.getPokemon(item.name).subscribe((pokemon: any) => {
            pokemonInfo.push(pokemon);
          });
        }
        return pokemonInfo;
    }));
  }

  public getPokemon(name: string): Observable<object> {
    const search = `${this.url}/${name}`;
    return this.http.get(search).pipe(map(
      (data: any) => {
        return data;
      }
    ));
  }
}
