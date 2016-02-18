System.register([], function(exports_1) {
    var AuthService;
    return {
        setters:[],
        execute: function() {
            // Simulates a service that handles AuthX
            AuthService = (function () {
                function AuthService() {
                }
                AuthService.isLoggedIn = true;
                return AuthService;
            })();
            exports_1("AuthService", AuthService);
        }
    }
});
//# sourceMappingURL=auth-service.js.map