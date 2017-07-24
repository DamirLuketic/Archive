import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopNaviComponent } from './components/layout/top-navi/top-navi.component';
import { FooterComponent } from "./components/layout/footer/footer.component";
import { HomeComponent } from './components/home/home.component';

import { routes } from "./app.routes";
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { PersonalComponent } from './components/personal/personal.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { UsersComponent } from './components/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import {AlbumService} from "./shared/services/album.service";
import {RootService} from "./shared/services/root.service";
import {AuthService} from "./shared/services/auth.service";
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNaviComponent,
    FooterComponent,
    HomeComponent,
    DropdownDirective,
    PersonalComponent,
    AlbumsComponent,
    UsersComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
      routes
  ],
  providers: [RootService, AlbumService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
