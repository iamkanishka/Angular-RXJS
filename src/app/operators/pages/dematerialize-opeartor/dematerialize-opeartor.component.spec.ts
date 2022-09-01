import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DematerializeOpeartorComponent } from './dematerialize-opeartor.component';

describe('DematerializeOpeartorComponent', () => {
  let component: DematerializeOpeartorComponent;
  let fixture: ComponentFixture<DematerializeOpeartorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DematerializeOpeartorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DematerializeOpeartorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
