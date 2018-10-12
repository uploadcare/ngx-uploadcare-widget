import { Component, ViewChild, OnInit } from '@angular/core';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { UcWidgetComponent, UcWidgetCustomComponent } from '../../src/index';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  publicKey = 'demopublickey';
  multipleFiles = false;
  multipleMin = 1;
  multipleMax = 2;
  previewStep = false;
  isImageOnly = false;
  crop: string; // example: crop = '2:3';
  imageShrink = null; // example: imageShrink = '1024x1024';
  clearable = false;
  tabs: string;
  inputAcceptTypes: string;
  preferredTypes: string;
  systemDialog = false;
  value = null;
  cdnBase = null;
  doNotStore = false;
  tabSelectOptions = [
    'default',
    'file',
    'url',
    'camera',
    'facebook',
    'gdrive',
    'gphotos',
    'dropbox',
    'instagram',
    'evernote',
    'flickr',
    'skydrive',
    'box',
    'vk',
    'huddle', ];
  tabsArr = [ this.tabSelectOptions[0] ];
  uploadedData: null;
  cropOptions = ['disabled', 'free', '16:9', '4:3', '5:4', '1:1', '300x400 upscale', '300x200 minimum'];
  cropSelected = [ this.cropOptions[0] ];
  validators = [
    (fileInfo) => {
      console.log('validator 1 - fired'); 
      // Throw error here to drop the uploading e.g.
      // if (fileInfo.isImage) throw new Error('Not Images Only'); 
    },
    (fileInfo) => {
      console.log('validator 2 - fired');
        // Throw error here to drop the uploading e.g.
        // if (!fileInfo.isImage) throw new Error('Images Only'); 
    },
  ];
  closeInTwoSec = false;

  @ViewChild(UcWidgetComponent) 
  private widgetComponent: UcWidgetComponent;
  
  @ViewChild(UcWidgetCustomComponent) 
  private widgetCustomComponent: UcWidgetCustomComponent;
  
  ngOnInit() {
    Observable.interval(2000)
      .subscribe(() => {
        if (this.closeInTwoSec && this.widgetComponent) {
          this.widgetComponent.reject();
        }
      });
  }

  onUpload(info) {
    console.log('fired Event "onUpload"');
    console.log(info);
    this.uploadedData = info;
  }
  
  onProgress(progress) {
    console.log('fired Event "onProgress with data:"');
    console.log(progress);
  }
  
  onChange(file) {
    if(!file) {
      return;
    }
    console.log('fired Event "onChange"');
    console.log(file);
  // input file parameter depends on "multiple-files" widget attribute
    if(this.multipleFiles) {
  //  file contains 2 methods:
  //  .promise() - returns the general promise for all uploaded files which resolves into an uploaded file group info
  //  .files() - returns an array of promises: one per each uploaded file.
  //   Each promise resolves into an uploaded file info
      console.log(file);
      if(file.promise) {
        file.promise().then((groupInfo) => {
          console.log('resolved general promise from "onChange" with data:');
          console.log(groupInfo);
        });
      }
      if(file.files) {
        file.files().forEach((promise) => {
          promise.then((fileInfo) => {
            console.log('resolves file promise with file info:');
            console.log(fileInfo);
          });
        });
      } else {
  // file contains uploaded file info
        console.log(file);
      }
    }
  }
  onClickAllTab(index) {
    if(index === 0) {
      this.tabsArr = [ this.tabSelectOptions[0] ];
      this.tabs = null;
    } else {
      this.tabs = this.tabsArr.join(' ');
    }
  }
  onClickCrop(index) {
    if(index === 0) {
      this.cropSelected = [ this.cropOptions[0] ];
      this.crop = null;
    } else {
      this.crop = this.cropSelected.join(',');
    }
  }
  clearVal() {
    this.widgetComponent.clearUploads();
    this.uploadedData = undefined;
  }
  resetWidget() {
    this.widgetComponent.reset(true);
    this.uploadedData = undefined;
  }
  openDialog() {
    this.widgetCustomComponent.openDialog();
    if(this.closeInTwoSec) {
      setTimeout(() => this.widgetCustomComponent.reject(), 2000);
    }
  }
}
