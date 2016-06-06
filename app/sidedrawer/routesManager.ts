import { Router, RouteParams } from "angular2/router";
import {SideDrawerType} from "nativescript-telerik-ui-pro/sidedrawer/angular/side-drawer-directives";

export abstract class RoutesManager{
    
   public static MIS_CARRUSELES_RUTE: string = "MisCarruseles";
   public static ADMINISTRAR_RUTE: string = "Administrar";
   public static CONFIGURAR_RUTE: string = "Configurar";
   public static AYUDA_RUTE: string = "Ayuda";
   public static OPINION_RUTE: string = "Opinion";
  
    
    constructor(private _router: Router, private _routeParams: RouteParams) {
    }
    
    abstract getDrawer(): SideDrawerType;
    
    abstract getActualPage(): String;
    
    public misCarruseles() {
        if(this.getActualPage()==RoutesManager.MIS_CARRUSELES_RUTE)        
            this.getDrawer().closeDrawer();
        else{
            this._router.navigate([RoutesManager.MIS_CARRUSELES_RUTE]);   
        }
    }
    
    public administrar() {        
        if(this.getActualPage()==RoutesManager.ADMINISTRAR_RUTE)        
            this.getDrawer().closeDrawer();
        else{
            this._router.navigate([RoutesManager.ADMINISTRAR_RUTE]);   
        }
                        
    }
    public configurar() {
        if(this.getActualPage()==RoutesManager.CONFIGURAR_RUTE)        
            this.getDrawer().closeDrawer();
        else{
            this._router.navigate([RoutesManager.CONFIGURAR_RUTE]);   
        }
    }
    public ayuda() {
        if(this.getActualPage()==RoutesManager.AYUDA_RUTE)        
            this.getDrawer().closeDrawer();
        else{
            this._router.navigate([RoutesManager.AYUDA_RUTE]);   
        }
    }
    public opinion() {
        if(this.getActualPage()==RoutesManager.OPINION_RUTE)        
            this.getDrawer().closeDrawer();
        else{
            this._router.navigate([RoutesManager.OPINION_RUTE]);   
        }
    }   
    
}