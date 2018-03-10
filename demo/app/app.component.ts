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
  onChange(info) {
    if(!info) {
      return;
    }
    console.log('fired Event "onChange"');
    console.log(info);
//  info contains 2 methods:
//  .promise() - returns the general promise for all uploadin files which resolves with the group info of uploaded files
//  .files() - returns the array of promises for each uploading file. Each promise resolves with uploaded file info
    if(info.promise) {
      info.promise().then((groupInfo) => {
        console.log('resolved general promise from "onChange" with data:');
        console.log(groupInfo);
      });
    }
    if(info.files) {
      info.files().forEach((promise) => {
        promise.then((fileInfo) => {
          console.log('resolves file promise with file info:');
          console.log(fileInfo);
        });
      });
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
    this.widgetComponent.clearValue();
    this.uploadedData = undefined;
  }
}
