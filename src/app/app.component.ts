import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private http: Http) {
    http.get('http://mlswebservices.azurewebsites.net/api/values').subscribe((next) => {
      this.title = next.json();
    });
  }
}
