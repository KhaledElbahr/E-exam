import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfRegisterComponent } from './admin-prof-register.component';

describe('AdminProfRegisterComponent', () => {
  let component: AdminProfRegisterComponent;
  let fixture: ComponentFixture<AdminProfRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProfRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProfRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
