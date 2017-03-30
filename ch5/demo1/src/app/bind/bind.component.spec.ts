/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BindComponent } from './bind.component';

describe('BindComponent', () => {
  let component: BindComponent;
  let fixture: ComponentFixture<BindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
