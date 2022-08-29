import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoidsubjectOperatorComponent } from './voidsubject-operator.component';

describe('VoidsubjectOperatorComponent', () => {
  let component: VoidsubjectOperatorComponent;
  let fixture: ComponentFixture<VoidsubjectOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoidsubjectOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoidsubjectOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
