System.register(['./flight-service', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var flight_service_1, core_1;
    var FlightManager;
    return {
        setters:[
            function (flight_service_1_1) {
                flight_service_1 = flight_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FlightManager = (function () {
                function FlightManager(FlightService) {
                    this.FlightService = FlightService;
                    this.fluege = [];
                }
                FlightManager.prototype.load = function (von, nach) {
                    var _this = this;
                    this.FlightService
                        .find(von, nach)
                        .subscribe(function (fluege) {
                        _this.fluege = fluege;
                    }, function (err) {
                        console.error("Fehler!");
                        console.error(err);
                    });
                };
                FlightManager = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [flight_service_1.FlightService])
                ], FlightManager);
                return FlightManager;
            })();
            exports_1("FlightManager", FlightManager);
        }
    }
});
//# sourceMappingURL=flight-manager.js.map