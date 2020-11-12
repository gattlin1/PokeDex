import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private mainTitle = 'Pokédex';

  constructor(private titleService: Title, private router: Router) {}

  public init(): void {
    this.router.events
    .pipe(filter((event) => event instanceof NavigationEnd))
    .subscribe((navigationEnd: NavigationEnd) => {
      this.setTitle(navigationEnd);
    });
  }

  public setTitle(navigationEnd: NavigationEnd): void {
    const urlPieces = navigationEnd.url.split('/').filter(piece => piece !== '');

    if (urlPieces.length === 0) {
      this.titleService.setTitle(this.mainTitle);
    } else {
      const secondaryTitlePieces = [...urlPieces[0]];
      secondaryTitlePieces[0] = secondaryTitlePieces[0].toUpperCase();
      const secondaryTitle = secondaryTitlePieces.join('');
      this.titleService.setTitle(`${this.mainTitle} | ${secondaryTitle}`);
    }
  }

  public getTitle(): string {
    return this.titleService.getTitle();
  }
}
