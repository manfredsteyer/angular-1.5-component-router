System.register(['angular2/platform/browser', './app', 'angular2/http', 'rxjs/add/operator/map', './services/flight-service', 'angular2/core', 'angular2/router', './services/flight-manager'], function(exports_1) {
    var browser_1, app_1, http_1, flight_service_1, core_1, router_1, flight_manager_1;
    var services;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (flight_service_1_1) {
                flight_service_1 = flight_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (flight_manager_1_1) {
                flight_manager_1 = flight_manager_1_1;
            }],
        execute: function() {
            services = [
                core_1.provide("BASE_URL", { useValue: 'http://www.angular.at' }),
                flight_service_1.FlightService,
                http_1.HTTP_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                flight_manager_1.FlightManager,
            ];
            browser_1.bootstrap(app_1.App, services);
        }
    }
});
//# sourceMappingURL=boot.js.map