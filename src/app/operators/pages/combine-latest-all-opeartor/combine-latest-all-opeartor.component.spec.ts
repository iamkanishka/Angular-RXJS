import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineLatestAllOpeartorComponent } from './combine-latest-all-opeartor.component';

describe('CombineLatestAllOpeartorComponent', () => {
  let component: CombineLatestAllOpeartorComponent;
  let fixture: ComponentFixture<CombineLatestAllOpeartorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombineLatestAllOpeartorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombineLatestAllOpeartorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
