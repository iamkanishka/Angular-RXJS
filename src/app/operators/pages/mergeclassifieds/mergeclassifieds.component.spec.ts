import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeclassifiedsComponent } from './mergeclassifieds.component';

describe('MergeclassifiedsComponent', () => {
  let component: MergeclassifiedsComponent;
  let fixture: ComponentFixture<MergeclassifiedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeclassifiedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeclassifiedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
