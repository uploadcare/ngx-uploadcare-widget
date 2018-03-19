import { Component, ViewChild } from '@angular/core';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { UcWidgetComponent } from '../../src/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  publicKey = 'demopublickey';
  multipleFiles = false;
  multipleMin = 1;
  multipleMax = 2;
  previewStep = false;
  isImageOnly = false;
  crop: string; // example: crop = '2:3';
  imageShrink: string; // example: imageShrink = '1024x1024';
  clearable = false;
  tabs: string;
  inputAcceptTypes: string;
  preferredTypes: string;
  systemDialog = false;
  value = null;
  cdnBase = null;
  doNotStore = false;
  tabSelectOptions = [
    { name: 'default', },
    { name: 'file', },
    { name: 'url', },
    { name: 'camera', },
    { name: 'facebook', },
    { name: 'gdrive', },
    { name: 'gphotos', },
    { name: 'dropbox', },
    { name: 'instagram', },
    { name: 'evernote', },
    { name: 'flickr', },
    { name: 'skydrive', },
    { name: 'box', },
    { name: 'vk', },
    { name: 'huddle', }, ];
  tabsArr = [ this.tabSelectOptions[0].name ];
  uploadedData: null;

  @ViewChild(UcWidgetComponent)
    private widgetComponent: UcWidgetComponent;

  onUpload(info) {
    console.log('fired Event "onUpload"');
    console.log(info);
    this.uploadedData = info;
  }
  onChange(file) {
    if(!file) {
      return;
    }
    console.log('fired Event "onChange"');
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
      this.tabsArr = [ this.tabSelectOptions[0].name ];
      this.tabs = null;
    } else {
      this.tabs = this.tabsArr.join(' ');
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
}
