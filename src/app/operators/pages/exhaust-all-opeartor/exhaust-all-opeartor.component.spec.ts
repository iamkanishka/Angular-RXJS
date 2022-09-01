import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhaustAllOpeartorComponent } from './exhaust-all-opeartor.component';

describe('ExhaustAllOpeartorComponent', () => {
  let component: ExhaustAllOpeartorComponent;
  let fixture: ComponentFixture<ExhaustAllOpeartorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhaustAllOpeartorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhaustAllOpeartorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
