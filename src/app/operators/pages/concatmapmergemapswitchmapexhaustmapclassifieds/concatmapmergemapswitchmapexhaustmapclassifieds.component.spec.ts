import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatmapmergemapswitchmapexhaustmapclassifiedsComponent } from './concatmapmergemapswitchmapexhaustmapclassifieds.component';

describe('ConcatmapmergemapswitchmapexhaustmapclassifiedsComponent', () => {
  let component: ConcatmapmergemapswitchmapexhaustmapclassifiedsComponent;
  let fixture: ComponentFixture<ConcatmapmergemapswitchmapexhaustmapclassifiedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcatmapmergemapswitchmapexhaustmapclassifiedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatmapmergemapswitchmapexhaustmapclassifiedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
