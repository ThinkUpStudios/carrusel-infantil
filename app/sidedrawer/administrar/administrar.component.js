var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var core_1 = require("angular2/core");
var page_1 = require("ui/page");
var sideDrawerModule = require('nativescript-telerik-ui-pro/sidedrawer');
var side_drawer_directives_1 = require("nativescript-telerik-ui-pro/sidedrawer/angular/side-drawer-directives");
var router_1 = require("angular2/router");
var routesManager_1 = require("../routesManager");
var AdministrarComponent = (function (_super) {
    __extends(AdministrarComponent, _super);
    function AdministrarComponent(page, _router, _routeParams) {
        _super.call(this, _router, _routeParams);
        this.page = page;
        this.sideDrawerTransition = new sideDrawerModule.PushTransition();
    }
    // << sidedrawer-angular-transition-definition
    AdministrarComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
    };
    AdministrarComponent.prototype.openDrawer = function () {
        this.drawer.showDrawer();
    };
    AdministrarComponent.prototype.onFadeTransitionTap = function (args) {
        this.setDrawerTransition(new sideDrawerModule.FadeTransition());
    };
    AdministrarComponent.prototype.onPushTransitionTap = function (args) {
        this.setDrawerTransition(new sideDrawerModule.PushTransition());
    };
    AdministrarComponent.prototype.onRevealTransitionTap = function (args) {
        this.setDrawerTransition(new sideDrawerModule.RevealTransition());
    };
    AdministrarComponent.prototype.onReverseSlideOutTransitionTap = function (args) {
        this.setDrawerTransition(new sideDrawerModule.ReverseSlideOutTransition());
    };
    AdministrarComponent.prototype.onScaleDownPusherTransitionTap = function (args) {
        this.setDrawerTransition(new sideDrawerModule.ScaleDownPusherTransition());
    };
    AdministrarComponent.prototype.onScaleUpTransitionTap = function (args) {
        this.setDrawerTransition(new sideDrawerModule.ScaleUpTransition());
    };
    AdministrarComponent.prototype.onSlideAlongTransitionTap = function (args) {
        this.setDrawerTransition(new sideDrawerModule.SlideAlongTransition());
    };
    AdministrarComponent.prototype.onSlideInOnTopTransitionTap = function (args) {
        this.setDrawerTransition(new sideDrawerModule.SlideInOnTopTransition());
    };
    AdministrarComponent.prototype.openSideDrawer = function () {
        this.drawer.showDrawer();
    };
    AdministrarComponent.prototype.setDrawerTransition = function (transition) {
        this.sideDrawerTransition = transition;
    };
    AdministrarComponent.prototype.getDrawer = function () {
        return this.drawer;
    };
    AdministrarComponent.prototype.getActualPage = function () {
        return routesManager_1.RoutesManager.ADMINISTRAR_RUTE;
    };
    __decorate([
        core_1.ViewChild(side_drawer_directives_1.RadSideDrawerComponent), 
        __metadata('design:type', (typeof (_a = typeof side_drawer_directives_1.RadSideDrawerComponent !== 'undefined' && side_drawer_directives_1.RadSideDrawerComponent) === 'function' && _a) || Object)
    ], AdministrarComponent.prototype, "drawerComponent", void 0);
    AdministrarComponent = __decorate([
        core_1.Component({
            selector: "sidedrawer-transitions",
            directives: [side_drawer_directives_1.RadSideDrawerComponent, side_drawer_directives_1.MainTemplateDirective, side_drawer_directives_1.DrawerTemplateDirective],
            templateUrl: 'sidedrawer/administrar/administrar.component.html'
        }),
        __param(0, core_1.Inject(page_1.Page)), 
        __metadata('design:paramtypes', [page_1.Page, router_1.Router, router_1.RouteParams])
    ], AdministrarComponent);
    return AdministrarComponent;
    var _a;
}(routesManager_1.RoutesManager));
exports.AdministrarComponent = AdministrarComponent;
//# sourceMappingURL=administrar.component.js.map