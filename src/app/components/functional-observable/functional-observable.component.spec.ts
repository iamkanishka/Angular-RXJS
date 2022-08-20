import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalObservableComponent } from './functional-observable.component';

describe('FunctionalObservableComponent', () => {
  let component: FunctionalObservableComponent;
  let fixture: ComponentFixture<FunctionalObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionalObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
