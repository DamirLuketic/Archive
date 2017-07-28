import { Component, OnInit, OnDestroy } from '@angular/core';
import {LoginData} from "../../shared/class/login-data";
import {AuthService} from "../../shared/services/auth.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {

    private loginSubscription: Subscription = null;

    constructor(private authService: AuthService) { }

    ngOnInit() {
        let loginData: LoginData = {nameEmail: 'luketic.damir@gmail.com', password: 'pass11' };

        this.loginSubscription = this.authService.logIn(loginData).subscribe(
            val => console.log(val),
            error => console.log(error),
            () => console.log('response compleat')
        )
    }

    ngOnDestroy(){
        if(this.loginSubscription != null){
            this.loginSubscription.unsubscribe();
        }
    }

}
