import {bootstrap}    from 'angular2/platform/browser'
import {App} from './app'
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/add/operator/map';
import {FlightService } from './services/flight-service';
import {provide, PLATFORM_PIPES} from 'angular2/core';
import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';
import { FlightManager} from './services/flight-manager';
import { AuthService} from './services/auth-service';

var services = [
    provide("BASE_URL", { useValue: 'http://www.angular.at' }),
    FlightService,
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    FlightManager,
];

bootstrap(App, services);

