System.register(['angular2/core', 'angular2/router', '../passenger-list/passenger-list', '../flight-list/flight-list', '../services/flight-manager', '../home/home', '../services/auth-service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, passenger_list_1, flight_list_1, flight_manager_1, home_1, auth_service_1;
    var FlightBooking;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (passenger_list_1_1) {
                passenger_list_1 = passenger_list_1_1;
            },
            function (flight_list_1_1) {
                flight_list_1 = flight_list_1_1;
            },
            function (flight_manager_1_1) {
                flight_manager_1 = flight_manager_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            FlightBooking = (function () {
                function FlightBooking(location) {
                    this.location = location;
                }
                FlightBooking.prototype.isActive = function (path) {
                    return this.location.path() == path;
                };
                FlightBooking = __decorate([
                    core_1.Component({
                        templateUrl: 'app/flight-booking/flight-booking.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [flight_manager_1.FlightManager]
                    }),
                    router_1.RouteConfig([
                        { path: 'passenger-list', component: passenger_list_1.PassengerList, name: 'PassengerList' },
                        { path: 'flight-list', component: flight_list_1.FlightList, name: 'FlightList', useAsDefault: true }
                    ]),
                    router_1.CanActivate(function (next, prev) {
                        // if (AuthService.isLoggedIn) return true;
                        // return false;
                        if (!auth_service_1.AuthService.isLoggedIn) {
                            next.componentType = home_1.Home;
                            next.urlParams = ["needLogin=true"];
                            next.terminal = true;
                        }
                        return true;
                    }), 
                    __metadata('design:paramtypes', [router_1.Location])
                ], FlightBooking);
                return FlightBooking;
            })();
            exports_1("FlightBooking", FlightBooking);
        }
    }
});
//# sourceMappingURL=flight-booking.js.map