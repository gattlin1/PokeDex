import { TestBed } from '@angular/core/testing';

import { FilterService } from './filter.service';

describe('FilterService', () => {
  let service: FilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('text is empty on initialization', done => {
    // arrange
    service.userTextObservable.subscribe((text: string) => {
      // assert
      expect(text).toBe('');
      done();
    });
  });

  it('text changes on input', done => {
    // act
    service.onUserInput('some text');

    // assert
    service.userTextObservable.subscribe((text: string) => {
      expect(text).toBe('some text');
      done();
    });
  });
});
