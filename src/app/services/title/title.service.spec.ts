import { TestBed } from '@angular/core/testing';
import { NavigationEnd, Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { TitleService } from './title.service';

describe('TitleService', () => {
  let service: TitleService;
  let router: Router;
  const navigationEnd: NavigationEnd = {
      id: 0,
      url: '/',
      urlAfterRedirects: '/'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    service = TestBed.inject(TitleService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('sets the homepage title', () => {
    // arrange
    // url is already set to homepage

    // act
    service.setTitle(navigationEnd);

    // assert
    expect(service.getTitle()).toBe('Pokédex');

  });

  it('sets the pokemon detail title', () => {
    // arrange
    navigationEnd.url = 'bulbasaur';

    // act
    service.setTitle(navigationEnd);

    // assert
    expect(service.getTitle()).toBe('Pokédex | Bulbasaur');
  })
});
