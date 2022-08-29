import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaysubjectOperatorComponent } from './replaysubject-operator.component';

describe('ReplaysubjectOperatorComponent', () => {
  let component: ReplaysubjectOperatorComponent;
  let fixture: ComponentFixture<ReplaysubjectOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplaysubjectOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplaysubjectOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
