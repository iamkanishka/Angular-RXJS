import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstoperatorComponent } from './firstoperator.component';

describe('FirstoperatorComponent', () => {
  let component: FirstoperatorComponent;
  let fixture: ComponentFixture<FirstoperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstoperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
