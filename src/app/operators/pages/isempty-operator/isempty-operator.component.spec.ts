import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsemptyOperatorComponent } from './isempty-operator.component';

describe('IsemptyOperatorComponent', () => {
  let component: IsemptyOperatorComponent;
  let fixture: ComponentFixture<IsemptyOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsemptyOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsemptyOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
