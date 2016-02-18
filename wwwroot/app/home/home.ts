import {Component } from 'angular2/core';
import {AuthService } from '../services/auth-service';

@Component({
    templateUrl: 'app/home/home.html'
})
export class Home {

    constructor() {
    }

    info = "Welcome";

    get isLoggedIn() {
        return AuthService.isLoggedIn;
    }

    set isLoggedIn(value) {
        AuthService.isLoggedIn = value;
    }

}