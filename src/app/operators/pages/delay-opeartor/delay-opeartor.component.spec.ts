import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayOpeartorComponent } from './delay-opeartor.component';

describe('DelayOpeartorComponent', () => {
  let component: DelayOpeartorComponent;
  let fixture: ComponentFixture<DelayOpeartorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelayOpeartorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelayOpeartorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
