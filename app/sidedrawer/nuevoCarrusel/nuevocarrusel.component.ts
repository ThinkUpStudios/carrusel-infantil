/**
 * Created by Facundo on 05/06/2016.
 */
import {Component, ElementRef, ViewChild, Inject} from "angular2/core";
import {View} from "ui/core/view";
import {RadSideDrawer} from "nativescript-telerik-ui-pro/sidedrawer";
import {Page} from "ui/page";
import imagepickerModule = require('nativescript-imagepicker');
import permissions = require( "nativescript-permissions" );
import {ActionItem} from "ui/action-bar";
import sideDrawerModule = require('nativescript-telerik-ui-pro/sidedrawer');
import {RadSideDrawerComponent, SideDrawerType, MainTemplateDirective, DrawerTemplateDirective} from "nativescript-telerik-ui-pro/sidedrawer/angular/side-drawer-directives";
import { Router, RouteParams } from "angular2/router";
import {RoutesManager} from "../routesManager"


var list;
// >> sidedrawer-angular-callbacks-definition
@Component({
    selector: "my-app",
    directives: [RadSideDrawerComponent, MainTemplateDirective, DrawerTemplateDirective],
    templateUrl: 'sidedrawer/nuevoCarrusel/nuevocarrusel.component.html'

})
export class AppComponent extends RoutesManager {
    constructor(@Inject(Page) private page: Page, _router: Router, _routeParams: RouteParams) {
        super(_router, _routeParams);
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: SideDrawerType;
    public list;
    public currentDrawerNotification:string;



    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        list = this.page.getViewById("urls-list");
        list.items = [];
    }


    getDrawer(){
        return this.drawer;
    }

    getActualPage(){
        return RoutesManager.NUEVO_CARRUSEL_ROUTE;
    }
    onSelectMultipleTap(){
        var context = imagepickerModule.create({
            mode: "multiple"
        });
        this.startSelection(context);
    }

    startSelection(context) {
        context
            .authorize()
            .then(function() {
                list.items = [];
                return context.present();
            })
            .then(function(selection) {
                selection.forEach(function(selected) {
                    console.log("uri: " + selected.uri);
                    console.log("fileUri: " + selected.fileUri);
                });
                list.items = selection;
            }).catch(function (e) {
            console.log(e);
        });
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

