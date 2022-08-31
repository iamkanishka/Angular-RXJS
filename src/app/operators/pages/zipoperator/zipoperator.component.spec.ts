import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipoperatorComponent } from './zipoperator.component';

describe('ZipoperatorComponent', () => {
  let component: ZipoperatorComponent;
  let fixture: ComponentFixture<ZipoperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZipoperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
