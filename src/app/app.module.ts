import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PokemonComponent } from './components/pokemon-container/pokemon/pokemon.component';
import { PokemonContainerComponent } from './components/pokemon-container/pokemon-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonComponent,
    PokemonContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
