var RoutesManager = (function () {
    function RoutesManager(_router, _routeParams) {
        this._router = _router;
        this._routeParams = _routeParams;
    }
    RoutesManager.prototype.misCarruseles = function () {
        if (this.getActualPage() == "MisCarruseles")
            this.getDrawer().closeDrawer();
        else {
            this._router.navigate(["MisCarruseles"]);
        }
    };
    RoutesManager.prototype.newCarrusel = function () {
        this._router.navigate(["NuevoCarrusel"]);
    };
    RoutesManager.prototype.administrar = function () {
        console.log('estoy en social');
        this._router.navigate(["Administrar"]);
    };
    RoutesManager.prototype.configurar = function () {
        console.log('estoy en importantes');
    };
    RoutesManager.prototype.ayuda = function () {
        console.log('estoy en la starred');
    };
    RoutesManager.prototype.opinion = function () {
        console.log('estoy en la mail');
    };
    return RoutesManager;
}());
exports.RoutesManager = RoutesManager;
//# sourceMappingURL=routesManager.js.map