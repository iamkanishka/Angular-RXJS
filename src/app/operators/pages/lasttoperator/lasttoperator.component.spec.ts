import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LasttoperatorComponent } from './lasttoperator.component';

describe('LasttoperatorComponent', () => {
  let component: LasttoperatorComponent;
  let fixture: ComponentFixture<LasttoperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LasttoperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LasttoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
