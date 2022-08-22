import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistintUntilChnagedOperatorComponent } from './distint-until-chnaged-operator.component';

describe('DistintUntilChnagedOperatorComponent', () => {
  let component: DistintUntilChnagedOperatorComponent;
  let fixture: ComponentFixture<DistintUntilChnagedOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistintUntilChnagedOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistintUntilChnagedOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
