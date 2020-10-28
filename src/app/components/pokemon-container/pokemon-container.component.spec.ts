import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterPipe } from 'src/app/pipes/filter/filter.pipe';

import { PokemonContainerComponent } from './pokemon-container.component';

describe('PokemonContainerComponent', () => {
  let component: PokemonContainerComponent;
  let fixture: ComponentFixture<PokemonContainerComponent>;
  let httpClient: HttpClientTestingModule;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonContainerComponent, FilterPipe ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpClient = TestBed.inject(HttpClientTestingModule);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
