import { Component} from 'angular2/core';
import { ROUTER_DIRECTIVES, Location, RouteConfig, CanActivate, ComponentInstruction} from 'angular2/router';
import { PassengerList} from '../passenger-list/passenger-list';
import { FlightList} from '../flight-list/flight-list';
import { FlightManager} from '../services/flight-manager';
import { Home} from '../home/home';
import {AuthService } from '../services/auth-service';

@Component({
    templateUrl: 'app/flight-booking/flight-booking.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [FlightManager]
})
@RouteConfig([
    { path: 'passenger-list', component: PassengerList, name: 'PassengerList' },
    { path: 'flight-list', component: FlightList, name: 'FlightList', useAsDefault: true }
])
@CanActivate((next: ComponentInstruction, prev: ComponentInstruction) => {
        // if (AuthService.isLoggedIn) return true;
        // return false;

        if (!AuthService.isLoggedIn) {
            next.componentType = Home;
            next.urlParams = ["needLogin=true"];
            next.terminal = true;
        }

        return true;
})
export class FlightBooking {

    constructor(private location: Location) {
    }

    isActive(path): boolean {
        return this.location.path() == path;
    }

}