import { Component } from '@angular/core';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  imagesOnly: boolean;
  publicKey = 'demopublickey';
  onUpload(info) {
    console.log('fired Event with info');
    console.log(info);
  }
}
