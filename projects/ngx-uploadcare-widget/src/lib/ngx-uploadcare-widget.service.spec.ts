import { TestBed } from '@angular/core/testing';

import { NgxUploadcareWidgetService } from './ngx-uploadcare-widget.service';

describe('NgxUploadcareWidgetService', () => {
  let service: NgxUploadcareWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxUploadcareWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
