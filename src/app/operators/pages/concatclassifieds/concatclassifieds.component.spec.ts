import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatclassifiedsComponent } from './concatclassifieds.component';

describe('ConcatclassifiedsComponent', () => {
  let component: ConcatclassifiedsComponent;
  let fixture: ComponentFixture<ConcatclassifiedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcatclassifiedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatclassifiedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
