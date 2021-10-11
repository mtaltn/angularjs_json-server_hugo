/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BtnCellRenderer2Component } from './BtnCellRenderer2.component';

describe('BtnCellRenderer2Component', () => {
  let component: BtnCellRenderer2Component;
  let fixture: ComponentFixture<BtnCellRenderer2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnCellRenderer2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnCellRenderer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
