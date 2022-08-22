import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistintOperatorComponent } from './distint-operator.component';

describe('DistintOperatorComponent', () => {
  let component: DistintOperatorComponent;
  let fixture: ComponentFixture<DistintOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistintOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistintOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
