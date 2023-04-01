import { TestBed } from '@angular/core/testing';
import { DataUtils } from './data-util.service';

describe('DataUtilService', () => {
  let service: DataUtils;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataUtils);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
