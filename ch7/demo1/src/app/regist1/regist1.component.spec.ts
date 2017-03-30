/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Regist1Component } from './regist1.component';

describe('Regist1Component', () => {
  let component: Regist1Component;
  let fixture: ComponentFixture<Regist1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Regist1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Regist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
