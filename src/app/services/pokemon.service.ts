import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {}
  private url = 'https://pokeapi.co/api/v2/pokemon?limit=10';

  // TODO: Make an actual pokemon object to replace generic object
  public getPokemon(identifier: string): Observable<object> {
    const search = this.url + identifier;
    return this.http.get(search).pipe(map(
      (data: any) => {
        console.log(data);
        return data;
    }));
  }
}
