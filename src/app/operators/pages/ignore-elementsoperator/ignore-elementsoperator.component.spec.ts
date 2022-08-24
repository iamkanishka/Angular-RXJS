import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgnoreElementsoperatorComponent } from './ignore-elementsoperator.component';

describe('IgnoreElementsoperatorComponent', () => {
  let component: IgnoreElementsoperatorComponent;
  let fixture: ComponentFixture<IgnoreElementsoperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgnoreElementsoperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgnoreElementsoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
