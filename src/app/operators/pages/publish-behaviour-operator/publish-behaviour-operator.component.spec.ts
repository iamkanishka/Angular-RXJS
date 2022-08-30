import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishBehaviourOperatorComponent } from './publish-behaviour-operator.component';

describe('PublishBehaviourOperatorComponent', () => {
  let component: PublishBehaviourOperatorComponent;
  let fixture: ComponentFixture<PublishBehaviourOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishBehaviourOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishBehaviourOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
