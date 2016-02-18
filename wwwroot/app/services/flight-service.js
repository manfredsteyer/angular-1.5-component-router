System.register(['angular2/core', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, http_1;
    var FlightService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            FlightService = (function () {
                function FlightService(baseUrl, http) {
                    this.baseUrl = baseUrl;
                    this.http = http;
                }
                FlightService.prototype.find = function (von, nach) {
                    /*
                    var url = this.baseUrl + "/api/flug"
                        + "?abflugOrt="
                        + encodeURIComponent(von)
                        + "&zielOrt="
                        + encodeURIComponent(nach);
            
                    // Promises
                    return fetch(url).then(result => result.json());
                    */
                    // var url = this.baseUrl + "/api/flug";
                    // Offline-Data for presentations without WIFI ;-)
                    var url = "/data/offline-data.json";
                    var params = new http_1.URLSearchParams();
                    params.set('abflugOrt', von);
                    params.set('zielOrt', nach);
                    return this.http
                        .get(url, { search: params })
                        .map(function (response) { return response.json(); });
                };
                FlightService = __decorate([
                    core_1.Injectable(),
                    __param(0, core_1.Inject('BASE_URL')), 
                    __metadata('design:paramtypes', [String, http_1.Http])
                ], FlightService);
                return FlightService;
            })();
            exports_1("FlightService", FlightService);
        }
    }
});
//# sourceMappingURL=flight-service.js.map