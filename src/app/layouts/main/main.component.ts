import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Token} from './token';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  public token;

  constructor(private http: Http, private getToken: Token) {
    this.token = this.getToken.Token;
  }

  /* Сервис который будет возращать результат в формате json */
  serviceGetData(url, callback) {
    this.http.get(url + this.token)
      .subscribe((data) => {
        callback(data.json());
      });
  }

  ngOnInit() {
    /* Получаем свои данные */
    this.serviceGetData('https://api.instagram.com/v1/users/self/media/recent/?access_token=', this.myData); // url, callback
    this.serviceGetData('https://api.instagram.com/v1/locations/search?lat=48.858844&lng=2.294351&distance=500&access_token=', this.location)
  }

  /* Получили мои данные */
  myData(data) {
    console.log('data', data);
  }

  /* Поиск по локации с дистанцией 100м - default=500 */
  location(users) {
    console.log('users', users);
  }

}
