import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiCastComponent } from './multi-cast.component';

describe('MultiCastComponent', () => {
  let component: MultiCastComponent;
  let fixture: ComponentFixture<MultiCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiCastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
