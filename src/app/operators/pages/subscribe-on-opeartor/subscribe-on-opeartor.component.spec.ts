import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeOnOpeartorComponent } from './subscribe-on-opeartor.component';

describe('SubscribeOnOpeartorComponent', () => {
  let component: SubscribeOnOpeartorComponent;
  let fixture: ComponentFixture<SubscribeOnOpeartorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeOnOpeartorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeOnOpeartorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
