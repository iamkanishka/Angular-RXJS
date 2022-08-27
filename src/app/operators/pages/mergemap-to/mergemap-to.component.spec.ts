import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergemapToComponent } from './mergemap-to.component';

describe('MergemapToComponent', () => {
  let component: MergemapToComponent;
  let fixture: ComponentFixture<MergemapToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergemapToComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergemapToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
