import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehavioursubjectOperatorComponent } from './behavioursubject-operator.component';

describe('BehavioursubjectOperatorComponent', () => {
  let component: BehavioursubjectOperatorComponent;
  let fixture: ComponentFixture<BehavioursubjectOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehavioursubjectOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BehavioursubjectOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
