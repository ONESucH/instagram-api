import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './layouts/main/main.component';
import { HeaderComponent } from './layouts/header/header.component';

import { Token } from './layouts/main/token';
import { CarouselComponent } from './layouts/carousel/carousel.component';
import { ServiceUserData } from './service/userData/userData.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    Token,
    MainComponent,
    ServiceUserData
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
