import { TestBed } from '@angular/core/testing';
import { NavigationEnd, Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { TitleService } from './title.service';

describe('TitleService', () => {
  let service: TitleService;
  let router: Router;

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

  it('gets the title', () => {
    // assert
    expect(service.getTitle()).toBe('PokéDex');
  })

  it('sets the homepage title', () => {
    // arrange
    const navigationEnd: NavigationEnd = {
      id: 0,
      url: '/',
      urlAfterRedirects: '/'
    };

    // act
    service.setTitle(navigationEnd);

    // assert
    expect(service.getTitle()).toBe('PokéDex');

  });

  it('sets the pokemon detail title', () => {
    // arrange
    const navigationEnd: NavigationEnd = {
      id: 0,
      url: '/bulbasaur',
      urlAfterRedirects: '/bulbasaur'
    };

    // act
    service.setTitle(navigationEnd);

    // assert
    expect(service.getTitle()).toBe('PokéDex | Bulbasaur');
  });
});
