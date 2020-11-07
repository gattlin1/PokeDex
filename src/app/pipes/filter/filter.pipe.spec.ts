import { Pokemon } from 'src/models/pokemon.model';
import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('Filters Pokemon', () => {
    // arrange
    const pipe = new FilterPipe();
    const searchText = 'c';
    const data = {
      a: new Pokemon(),
      ab: new Pokemon(),
      b: new Pokemon(),
      c: new Pokemon()
    };
    const expected = {
      c: new Pokemon()
    };

    // act
    const actual = pipe.transform(data, searchText);
    const keys = Object.keys(actual);

    // assert
    expect(keys.length).toBe(1);
    expect(keys[0]).toBe('c');
  });
});
