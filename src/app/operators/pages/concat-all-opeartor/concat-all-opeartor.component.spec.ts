import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatAllOpeartorComponent } from './concat-all-opeartor.component';

describe('ConcatAllOpeartorComponent', () => {
  let component: ConcatAllOpeartorComponent;
  let fixture: ComponentFixture<ConcatAllOpeartorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcatAllOpeartorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatAllOpeartorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
