import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabstrPage } from './tabstr.page';

describe('TabstrPage', () => {
  let component: TabstrPage;
  let fixture: ComponentFixture<TabstrPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabstrPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabstrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
