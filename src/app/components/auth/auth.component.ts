import { Component, OnInit } from '@angular/core';
import {LoginData} from "../../shared/class/login-data";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

    constructor(private authService: AuthService) { }

    ngOnInit() {
        let loginData: LoginData = {nameEmail: 'luketic.damir@gmail.com', password: 'pass11' };

        this.authService.logIn(loginData).subscribe(
            val => console.log(val),
            error => console.log(error),
            () => console.log('response compleat')
        )
    }

}
