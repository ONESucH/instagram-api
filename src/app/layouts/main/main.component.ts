import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Token } from './token';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  token;

  constructor(private http: Http, private getToken: Token) {
    this.token = this.getToken.Token;
  }

  ngOnInit() {
    /* Получаем свои данные */
    this.http.get('https://api.instagram.com/v1/users/self/media/recent/?access_token='+this.token)
      .subscribe((data) => {
        let result = data.json();
        console.log('result', result);
      })
  }

  /* Поиск по локации */
  location() {
    // https://api.instagram.com/v1/locations/search?lat=48.858844&lng=2.294351&access_token=this.token
  }

}
