import { Router, RouteParams } from "angular2/router";
import {SideDrawerType} from "nativescript-telerik-ui-pro/sidedrawer/angular/side-drawer-directives";

export abstract class RoutesManager{
    
    constructor(private _router: Router, private _routeParams: RouteParams) {
    }
    
    abstract getDrawer(): SideDrawerType;
    
    abstract getActualPage(): String;
    
    public misCarruseles() {
        if(this.getActualPage()=="MisCarruseles")        
            this.getDrawer().closeDrawer();
        else{
            this._router.navigate(["MisCarruseles"]);   
        }
    }
    public newCarrusel(){
        this._router.navigate(["NuevoCarrusel"]);
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
    
}