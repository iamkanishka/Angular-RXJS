import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleoperatorComponent } from './sampleoperator.component';

describe('SampleoperatorComponent', () => {
  let component: SampleoperatorComponent;
  let fixture: ComponentFixture<SampleoperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleoperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
