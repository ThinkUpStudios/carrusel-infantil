import { Router, RouteParams } from "angular2/router";
import {SideDrawerType} from "nativescript-telerik-ui-pro/sidedrawer/angular/side-drawer-directives";

export abstract class RoutesManager{
    
   public static MIS_CARRUSELES_ROUTE: string = "MisCarruseles";
   public static ADMINISTRAR_ROUTE: string = "Administrar";
    public static NUEVO_CARRUSEL_ROUTE: string = "NuevoCarrusel";
   public static CONFIGURAR_ROUTE: string = "Configurar";
   public static AYUDA_ROUTE: string = "Ayuda";
   public static OPINION_ROUTE: string = "Opinion";
  
    
    constructor(private _router: Router, private _routeParams: RouteParams) {
    }
    
    abstract getDrawer(): SideDrawerType;
    
    abstract getActualPage(): String;
    
    public misCarruseles() {
        if(this.getActualPage()==RoutesManager.MIS_CARRUSELES_ROUTE)
            this.getDrawer().closeDrawer();
        else{
            this._router.navigate([RoutesManager.MIS_CARRUSELES_ROUTE]);
        }
    }
    public newCarrusel(){
        if(this.getActualPage()==RoutesManager.NUEVO_CARRUSEL_ROUTE)
            this.getDrawer().closeDrawer();
        else{
            this._router.navigate([RoutesManager.NUEVO_CARRUSEL_ROUTE]);
        }

    }
    
    public administrar() {        
        if(this.getActualPage()==RoutesManager.ADMINISTRAR_ROUTE)
            this.getDrawer().closeDrawer();
        else{
            this._router.navigate([RoutesManager.ADMINISTRAR_ROUTE]);
        }
                        
    }
    public configurar() {
        if(this.getActualPage()==RoutesManager.CONFIGURAR_ROUTE)
            this.getDrawer().closeDrawer();
        else{
            this._router.navigate([RoutesManager.CONFIGURAR_ROUTE]);
        }
    }
    public ayuda() {
        if(this.getActualPage()==RoutesManager.AYUDA_ROUTE)
            this.getDrawer().closeDrawer();
        else{
            this._router.navigate([RoutesManager.AYUDA_ROUTE]);
        }
    }
    public opinion() {
        if(this.getActualPage()==RoutesManager.OPINION_ROUTE)
            this.getDrawer().closeDrawer();
        else{
            this._router.navigate([RoutesManager.OPINION_ROUTE]);
        }
    }   
    
}