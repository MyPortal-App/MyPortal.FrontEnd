/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DatasharingService } from './datasharing.service';

describe('Service: Datasharing', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatasharingService]
    });
  });

  it('should ...', inject([DatasharingService], (service: DatasharingService) => {
    expect(service).toBeTruthy();
  }));
});
