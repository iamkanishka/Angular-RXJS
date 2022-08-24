import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoperatorComponent } from './auditoperator.component';

describe('AuditoperatorComponent', () => {
  let component: AuditoperatorComponent;
  let fixture: ComponentFixture<AuditoperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditoperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
