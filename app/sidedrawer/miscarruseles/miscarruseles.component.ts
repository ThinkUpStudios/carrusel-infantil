import {Component, ElementRef, ViewChild, Inject} from "angular2/core";
import {View} from "ui/core/view";
import {RadSideDrawer} from "nativescript-telerik-ui-pro/sidedrawer";
import {Page} from "ui/page";
import {ActionItem} from "ui/action-bar";
import sideDrawerModule = require('nativescript-telerik-ui-pro/sidedrawer');
import {RadSideDrawerComponent, SideDrawerType, MainTemplateDirective, DrawerTemplateDirective} from "nativescript-telerik-ui-pro/sidedrawer/angular/side-drawer-directives";
import { Router, RouteParams } from "angular2/router";
import {RoutesManager} from "../routesManager"


// >> sidedrawer-angular-callbacks-definition
@Component({
    selector: "my-app",
    directives: [RadSideDrawerComponent, MainTemplateDirective, DrawerTemplateDirective],
    templateUrl: 'sidedrawer/miscarruseles/miscarruseles.component.html'
    
})
export class AppComponent extends RoutesManager {
    constructor(@Inject(Page) private page: Page, _router: Router, _routeParams: RouteParams) {
        super(_router, _routeParams);
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: SideDrawerType;
    public currentDrawerNotification:string;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
    }
    
    public openDrawer(){
        this.drawer.showDrawer();
    }
    
     public onDrawerOpening() {
        console.log("Drawer opening");
    }

    public onDrawerOpened() {
         console.log("Drawer opened");
    }

    public onDrawerClosing() {
         console.log("Drawer closing");
    }

    public onDrawerClosed() {
         console.log("Drawer closed");
    }
    
    getDrawer(){
        return this.drawer;
    }
    
    getActualPage(){
        return "MisCarruseles";
    }
    /**
     * name
     
    public misCarruseles() {        
        this.drawer.closeDrawer();
    }
    public administrar() {
        console.log('estoy en social');
        this._router.navigate(["Administrar"]);                
    }
    public configurar() {
        console.log('estoy en importantes')
    }
    public ayuda() {
        console.log('estoy en la starred')
    }
    public opinion() {
        console.log('estoy en la mail')
    }   
    */
    
}