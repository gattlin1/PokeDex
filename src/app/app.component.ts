import { Component } from '@angular/core';
import { TitleService } from './services/title/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pokédex';
  constructor(private titleService: TitleService) {
    titleService.init();
  }
}