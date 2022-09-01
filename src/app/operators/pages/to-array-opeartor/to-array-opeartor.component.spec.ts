import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToArrayOpeartorComponent } from './to-array-opeartor.component';

describe('ToArrayOpeartorComponent', () => {
  let component: ToArrayOpeartorComponent;
  let fixture: ComponentFixture<ToArrayOpeartorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToArrayOpeartorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToArrayOpeartorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
