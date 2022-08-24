import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistintUntilKeyChnagedOperatorComponent } from './distint-until-key-chnaged-operator.component';

describe('DistintUntilKeyChnagedOperatorComponent', () => {
  let component: DistintUntilKeyChnagedOperatorComponent;
  let fixture: ComponentFixture<DistintUntilKeyChnagedOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistintUntilKeyChnagedOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistintUntilKeyChnagedOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
