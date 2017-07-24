import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RootService} from "./root.service";
import {LoginData} from "../class/login-data";

@Injectable()
export class AuthService {

  public auth;
  public apiRoute = this.rootService.apiRoute;

  constructor(private http: HttpClient, private rootService: RootService) { }

  logIn(data: LoginData){
    return this.http.post(this.apiRoute + 'logIn', data)
  }
}
