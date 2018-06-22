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
  imgWidth;
  drowBlock;
  value = 0;
  carouselLength = 3; // Сколько окон внутри карусели

  constructor(
    private carousel: ServiceUserData,
    private routerModule: Router
  ) {
    this.pasteCarousel = this.carousel.moreData;
    this.router = this.routerModule;
  }

  ngOnInit() {
    this.carouselBuild('');
    window.addEventListener('resize', () => this.carouselBuild);
  }

  carouselBuild(sub) {
    let carouselWidth = document.getElementsByClassName('main-carousel')[0].getBoundingClientRect(),
      lengthImg = document.getElementsByClassName('carousel-image').length,
      controller = (imgSize, sub) => {
      let revert: any = '-'+imgSize * lengthImg;
        if (sub == 'prev') this.value += imgSize;
        if (sub == 'next') this.value -= imgSize;
        if (this.value > imgSize) this.value = 0;
        if (this.value < revert / this.carouselLength) this.value = 0;
      };
    controller(carouselWidth.width, sub);
    /* Drow */
    this.drowBlock = {
      'margin-left': this.value + 'px' // Отступы
    };
    /* Img size */
    this.imgWidth = {
      'width': carouselWidth.width / this.carouselLength + 'px', // Ширина
      'margin-right': carouselWidth.width / this.carouselLength / 50 + 'px' // Отступы
    }
  }
}
