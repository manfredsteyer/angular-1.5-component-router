System.register(['angular2/core', 'angular2/router', './home/home', './flight-edit/flight-edit', './something-else/something-else'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, home_1, flight_edit_1, something_else_1;
    var FlightBookingLoader, App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (flight_edit_1_1) {
                flight_edit_1 = flight_edit_1_1;
            },
            function (something_else_1_1) {
                something_else_1 = something_else_1_1;
            }],
        execute: function() {
            FlightBookingLoader = function () { return System.import('app/flight-booking/flight-booking.js').then(function (f) { return f.FlightBooking; }); };
            App = (function () {
                function App(location) {
                    this.location = location;
                }
                App.prototype.isActive = function (path) {
                    if (path == '') {
                        return this.location.path() == '';
                    }
                    return this.location.path().startsWith(path);
                };
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'app/app.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: home_1.Home, name: 'Home', useAsDefault: true },
                        { path: '/flight-booking/...', name: 'FlightBooking', loader: FlightBookingLoader },
                        { path: '/flight-edit/:id', component: flight_edit_1.FlightEdit, name: 'FlightEdit' },
                        { path: '/something-else', component: something_else_1.SomethingElse, name: 'SomethingElse' }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Location])
                ], App);
                return App;
            })();
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.js.map