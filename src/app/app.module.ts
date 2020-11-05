import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PokemonComponent } from './components/pokemon-container/pokemon/pokemon.component';
import { PokemonContainerComponent } from './components/pokemon-container/pokemon-container.component';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { SortPipe } from './pipes/sort/sort.pipe';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { TypeComponent } from './components/type/type.component';
import { StatsComponent } from './components/stats/stats.component';

const appRoutes: Routes = [
  {path: '', component: PokemonContainerComponent},
  {path: ':name', component: PokemonDetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonComponent,
    PokemonContainerComponent,
    FilterPipe,
    SortPipe,
    PokemonDetailComponent,
    TypeComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
