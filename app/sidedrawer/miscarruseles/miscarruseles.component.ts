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
export class MisCarruselesComponent extends RoutesManager {
    constructor(@Inject(Page) private page: Page, _router: Router, _routeParams: RouteParams) {
        super(_router, _routeParams);
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    
    private drawer: SideDrawerType;
    public currentDrawerNotification:string;



    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
    }


    getDrawer(){
        return this.drawer;
    }
    
    getActualPage(){
        return RoutesManager.MIS_CARRUSELES_ROUTE;
    }

   
    
    
}