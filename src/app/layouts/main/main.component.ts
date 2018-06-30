import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Token } from './token';
import { ServiceUserData } from '../../service/userData/userData.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  public token;
  public userId;
  public usersData;

  constructor(
    private http: Http,
    private getToken: Token,
    private request: ServiceUserData
  ) {
    this.token = this.getToken.Token;
    this.userId = this.getToken.Token.split('.')[0]; // userId берется из Токена
  }

  ngOnInit() {

    this.http.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + this.token)
      .subscribe((data) => {
        this.usersData = data.json().data;
      });

    /* Получаем свои данные */
    this.serviceGetData('https://api.instagram.com/v1/users/self/media/recent/?access_token=', this.myData); // url, callback
  }

  /* Сервис который будет возращать результат в формате json */
  serviceGetData(url, callback) {
    this.http.get(url + this.token)
      .subscribe((data) => {
        if (data) {
          callback(data.json());
        }
      });
  }

  /* Получили мои данные */
  myData(result) {

  }

  /* Поиск по локации с дистанцией 100м - default=500 */
  location(users) {

  }

  /* Поиск пользователя по ID */
  moreUsers(moreUsers) {

  }

  /* Отправим данные на другой роутинг */
  requestData(obj) {
    this.request.getUserData(obj);
  }
}
