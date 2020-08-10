import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialiteCuisineComponent } from './specialite-cuisine.component';

describe('SpecialiteCuisineComponent', () => {
  let component: SpecialiteCuisineComponent;
  let fixture: ComponentFixture<SpecialiteCuisineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialiteCuisineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialiteCuisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
