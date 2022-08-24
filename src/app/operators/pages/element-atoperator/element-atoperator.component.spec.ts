import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementAtoperatorComponent } from './element-atoperator.component';

describe('ElementAtoperatorComponent', () => {
  let component: ElementAtoperatorComponent;
  let fixture: ComponentFixture<ElementAtoperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementAtoperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementAtoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
