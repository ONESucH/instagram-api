import { Component, OnInit } from '@angular/core';
import { ServiceUserData } from '../../service/userData/userData.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit {

  public pasteCarousel;
  public router;

  constructor(
    private carousel: ServiceUserData,
    private routerModule: Router
  ) {
    this.pasteCarousel = this.carousel.moreData;
    this.router = this.routerModule;
  }

  ngOnInit() {
    this.carouselBuild();
  }

  carouselBuild() {
    let carouselWidth = document.getElementsByClassName('main-carousel')[0].getBoundingClientRect(),
      img = document.querySelector('.carousel-image');

    console.log('img', img);
  }

}
