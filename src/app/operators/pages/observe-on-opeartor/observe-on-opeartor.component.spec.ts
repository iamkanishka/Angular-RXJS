import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserveOnOpeartorComponent } from './observe-on-opeartor.component';

describe('ObserveOnOpeartorComponent', () => {
  let component: ObserveOnOpeartorComponent;
  let fixture: ComponentFixture<ObserveOnOpeartorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObserveOnOpeartorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserveOnOpeartorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
