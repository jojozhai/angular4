/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ObservableService } from './observable.service';

describe('ObservableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObservableService]
    });
  });

  it('should ...', inject([ObservableService], (service: ObservableService) => {
    expect(service).toBeTruthy();
  }));
});
