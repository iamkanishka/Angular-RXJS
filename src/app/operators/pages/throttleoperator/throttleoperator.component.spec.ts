import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrottleoperatorComponent } from './throttleoperator.component';

describe('ThrottleoperatorComponent', () => {
  let component: ThrottleoperatorComponent;
  let fixture: ComponentFixture<ThrottleoperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThrottleoperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThrottleoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
