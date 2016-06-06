var RoutesManager = (function () {
    function RoutesManager(_router, _routeParams) {
        this._router = _router;
        this._routeParams = _routeParams;
    }
    RoutesManager.prototype.misCarruseles = function () {
        if (this.getActualPage() == RoutesManager.MIS_CARRUSELES_ROUTE)
            this.getDrawer().closeDrawer();
        else {
            this._router.navigate([RoutesManager.MIS_CARRUSELES_ROUTE]);
        }
    };
    RoutesManager.prototype.newCarrusel = function () {
        this._router.navigate(["NuevoCarrusel"]);
    };
    RoutesManager.prototype.administrar = function () {
        if (this.getActualPage() == RoutesManager.ADMINISTRAR_ROUTE)
            this.getDrawer().closeDrawer();
        else {
            this._router.navigate([RoutesManager.ADMINISTRAR_ROUTE]);
        }
    };
    RoutesManager.prototype.configurar = function () {
        if (this.getActualPage() == RoutesManager.CONFIGURAR_ROUTE)
            this.getDrawer().closeDrawer();
        else {
            this._router.navigate([RoutesManager.CONFIGURAR_ROUTE]);
        }
    };
    RoutesManager.prototype.ayuda = function () {
        if (this.getActualPage() == RoutesManager.AYUDA_ROUTE)
            this.getDrawer().closeDrawer();
        else {
            this._router.navigate([RoutesManager.AYUDA_ROUTE]);
        }
    };
    RoutesManager.prototype.opinion = function () {
        if (this.getActualPage() == RoutesManager.OPINION_ROUTE)
            this.getDrawer().closeDrawer();
        else {
            this._router.navigate([RoutesManager.OPINION_ROUTE]);
        }
    };
    RoutesManager.MIS_CARRUSELES_ROUTE = "MisCarruseles";
    RoutesManager.ADMINISTRAR_ROUTE = "Administrar";
    RoutesManager.CONFIGURAR_ROUTE = "Configurar";
    RoutesManager.AYUDA_ROUTE = "Ayuda";
    RoutesManager.OPINION_ROUTE = "Opinion";
    return RoutesManager;
}());
exports.RoutesManager = RoutesManager;
//# sourceMappingURL=routesManager.js.map