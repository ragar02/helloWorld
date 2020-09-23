import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'DevOps-Demo';
  message = 'hello';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('/api/hello')
      .subscribe(
        (res: { msg: string }) => (this.message = JSON.stringify(res.msg))
      );
  }
}
