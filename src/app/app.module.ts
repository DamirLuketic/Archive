import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopNaviComponent } from './components/layout/top-navi/top-navi.component';
import { FooterComponent } from "./components/layout/footer/footer.component";
import { HomeComponent } from './components/home/home.component';

import { routes } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    TopNaviComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
      routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
