/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LifeComponent } from './life.component';

describe('LifeComponent', () => {
  let component: LifeComponent;
  let fixture: ComponentFixture<LifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
