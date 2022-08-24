import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleoperatorComponent } from './singleoperator.component';

describe('SingleoperatorComponent', () => {
  let component: SingleoperatorComponent;
  let fixture: ComponentFixture<SingleoperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleoperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
