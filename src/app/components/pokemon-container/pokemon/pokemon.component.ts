import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/models/pokemon.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  @Input() info: Pokemon = new Pokemon();
}
