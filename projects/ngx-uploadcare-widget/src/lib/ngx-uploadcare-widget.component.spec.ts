import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxUploadcareWidgetComponent } from './ngx-uploadcare-widget.component';

describe('NgxUploadcareWidgetComponent', () => {
  let component: NgxUploadcareWidgetComponent;
  let fixture: ComponentFixture<NgxUploadcareWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxUploadcareWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxUploadcareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
