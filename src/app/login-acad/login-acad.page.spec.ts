import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginAcadPage } from './login-acad.page';

describe('LoginAcadPage', () => {
  let component: LoginAcadPage;
  let fixture: ComponentFixture<LoginAcadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAcadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
