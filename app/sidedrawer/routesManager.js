var RoutesManager = (function () {
    function RoutesManager(_router, _routeParams) {
        this._router = _router;
        this._routeParams = _routeParams;
    }
    RoutesManager.prototype.misCarruseles = function () {
        if (this.getActualPage() == RoutesManager.MIS_CARRUSELES_RUTE)
            this.getDrawer().closeDrawer();
        else {
            this._router.navigate([RoutesManager.MIS_CARRUSELES_RUTE]);
        }
    };
    RoutesManager.prototype.newCarrusel = function () {
        this._router.navigate(["NuevoCarrusel"]);
    };
    RoutesManager.prototype.administrar = function () {
        if (this.getActualPage() == RoutesManager.ADMINISTRAR_RUTE)
            this.getDrawer().closeDrawer();
        else {
            this._router.navigate([RoutesManager.ADMINISTRAR_RUTE]);
        }
    };
    RoutesManager.prototype.configurar = function () {
        if (this.getActualPage() == RoutesManager.CONFIGURAR_RUTE)
            this.getDrawer().closeDrawer();
        else {
            this._router.navigate([RoutesManager.CONFIGURAR_RUTE]);
        }
    };
    RoutesManager.prototype.ayuda = function () {
        if (this.getActualPage() == RoutesManager.AYUDA_RUTE)
            this.getDrawer().closeDrawer();
        else {
            this._router.navigate([RoutesManager.AYUDA_RUTE]);
        }
    };
    RoutesManager.prototype.opinion = function () {
        if (this.getActualPage() == RoutesManager.OPINION_RUTE)
            this.getDrawer().closeDrawer();
        else {
            this._router.navigate([RoutesManager.OPINION_RUTE]);
        }
    };
    RoutesManager.MIS_CARRUSELES_RUTE = "MisCarruseles";
    RoutesManager.ADMINISTRAR_RUTE = "Administrar";
    RoutesManager.CONFIGURAR_RUTE = "Configurar";
    RoutesManager.AYUDA_RUTE = "Ayuda";
    RoutesManager.OPINION_RUTE = "Opinion";
    return RoutesManager;
}());
exports.RoutesManager = RoutesManager;
//# sourceMappingURL=routesManager.js.map