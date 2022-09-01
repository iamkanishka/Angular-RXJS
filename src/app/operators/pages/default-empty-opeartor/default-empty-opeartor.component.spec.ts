import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultEmptyOpeartorComponent } from './default-empty-opeartor.component';

describe('DefaultEmptyOpeartorComponent', () => {
  let component: DefaultEmptyOpeartorComponent;
  let fixture: ComponentFixture<DefaultEmptyOpeartorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultEmptyOpeartorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultEmptyOpeartorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
