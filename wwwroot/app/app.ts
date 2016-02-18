import {Component } from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Location, CanActivate} from 'angular2/router';
import {Home } from './home/home';
import {FlightBooking } from './flight-booking/flight-booking';
import {FlightEdit } from './flight-edit/flight-edit';
import {SomethingElse} from './something-else/something-else';

declare var System: any;
var FlightBookingLoader = () => System.import('app/flight-booking/flight-booking.js').then(f => f.FlightBooking);

@Component({
    selector: 'app',
    templateUrl: 'app/app.html',
    directives: [ROUTER_DIRECTIVES] 
})
@RouteConfig([
        { path: '/', component: Home, name: 'Home', useAsDefault: true },
        { path: '/flight-booking/...', name: 'FlightBooking', loader: FlightBookingLoader },
        { path: '/flight-edit/:id', component: FlightEdit, name: 'FlightEdit' },
        { path: '/something-else', component: SomethingElse, name: 'SomethingElse'}
])
export class App {

    constructor(private location: Location) {
    }

    isActive(path): boolean {
        if (path == '') {
            return this.location.path() == '';
        }
        return this.location.path().startsWith(path);
    }

}