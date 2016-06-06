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
var AyudaComponent = (function (_super) {
    __extends(AyudaComponent, _super);
    function AyudaComponent(page, _router, _routeParams) {
        _super.call(this, _router, _routeParams);
        this.page = page;
        this.sideDrawerTransition = new sideDrawerModule.PushTransition();
    }
    // << sidedrawer-angular-transition-definition
    AyudaComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
    };
    AyudaComponent.prototype.openDrawer = function () {
        this.drawer.showDrawer();
    };
    AyudaComponent.prototype.onFadeTransitionTap = function (args) {
        this.setDrawerTransition(new sideDrawerModule.FadeTransition());
    };
    AyudaComponent.prototype.onPushTransitionTap = function (args) {
        this.setDrawerTransition(new sideDrawerModule.PushTransition());
    };
    AyudaComponent.prototype.onRevealTransitionTap = function (args) {
        this.setDrawerTransition(new sideDrawerModule.RevealTransition());
    };
    AyudaComponent.prototype.onReverseSlideOutTransitionTap = function (args) {
        this.setDrawerTransition(new sideDrawerModule.ReverseSlideOutTransition());
    };
    AyudaComponent.prototype.onScaleDownPusherTransitionTap = function (args) {
        this.setDrawerTransition(new sideDrawerModule.ScaleDownPusherTransition());
    };
    AyudaComponent.prototype.onScaleUpTransitionTap = function (args) {
        this.setDrawerTransition(new sideDrawerModule.ScaleUpTransition());
    };
    AyudaComponent.prototype.onSlideAlongTransitionTap = function (args) {
        this.setDrawerTransition(new sideDrawerModule.SlideAlongTransition());
    };
    AyudaComponent.prototype.onSlideInOnTopTransitionTap = function (args) {
        this.setDrawerTransition(new sideDrawerModule.SlideInOnTopTransition());
    };
    AyudaComponent.prototype.openSideDrawer = function () {
        this.drawer.showDrawer();
    };
    AyudaComponent.prototype.setDrawerTransition = function (transition) {
        this.sideDrawerTransition = transition;
    };
    AyudaComponent.prototype.getDrawer = function () {
        return this.drawer;
    };
    AyudaComponent.prototype.getActualPage = function () {
        return routesManager_1.RoutesManager.AYUDA_RUTE;
    };
    __decorate([
        core_1.ViewChild(side_drawer_directives_1.RadSideDrawerComponent), 
        __metadata('design:type', (typeof (_a = typeof side_drawer_directives_1.RadSideDrawerComponent !== 'undefined' && side_drawer_directives_1.RadSideDrawerComponent) === 'function' && _a) || Object)
    ], AyudaComponent.prototype, "drawerComponent", void 0);
    AyudaComponent = __decorate([
        core_1.Component({
            selector: "sidedrawer-transitions",
            directives: [side_drawer_directives_1.RadSideDrawerComponent, side_drawer_directives_1.MainTemplateDirective, side_drawer_directives_1.DrawerTemplateDirective],
            templateUrl: 'sidedrawer/ayuda/ayuda.html'
        }),
        __param(0, core_1.Inject(page_1.Page)), 
        __metadata('design:paramtypes', [page_1.Page, router_1.Router, router_1.RouteParams])
    ], AyudaComponent);
    return AyudaComponent;
    var _a;
}(routesManager_1.RoutesManager));
exports.AyudaComponent = AyudaComponent;
//# sourceMappingURL=ayuda.js.map