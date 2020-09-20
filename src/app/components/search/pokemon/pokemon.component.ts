import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  @Input() info: object;
  public image: string;
  public types: Array<string>;
  public name: string;

  constructor() { }

  ngOnInit(): void {
    this.image = this.info['sprites'].front_default;
    this.name = this.info['name'];
  }

}
