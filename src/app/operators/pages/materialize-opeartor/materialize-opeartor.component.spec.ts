import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterializeOpeartorComponent } from './materialize-opeartor.component';

describe('MaterializeOpeartorComponent', () => {
  let component: MaterializeOpeartorComponent;
  let fixture: ComponentFixture<MaterializeOpeartorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterializeOpeartorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterializeOpeartorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
