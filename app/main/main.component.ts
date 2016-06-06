import { Component } from "angular2/core";
import { ObservableArray } from "data/observable-array";
import { RouteConfig, ROUTER_DIRECTIVES } from "angular2/router";
import { NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS } from "nativescript-angular/router";
import * as MisCarruseles from "../sidedrawer/miscarruseles/miscarruseles.component";
import * as Administrar from "../sidedrawer/administrar/administrar.component";
import * as NuevoCarrusel from "../sidedrawer/nuevoCarrusel/nuevocarrusel.component";
import * as Configuracion from "../sidedrawer/configuracion/configuracion";
import * as Ayuda from "../sidedrawer/ayuda/ayuda";
import {RoutesManager} from "../sidedrawer/routesManager"

@Component({
  selector: "main",
  directives: [ROUTER_DIRECTIVES, NS_ROUTER_DIRECTIVES],
  providers: [NS_ROUTER_PROVIDERS],
  /** 
   * Para que funcione <page-router-outlet></page-router-outlet> no es necesario agregar la directiva  ROUTER_DIRECTIVES
  */
  //template: "<page-router-outlet></page-router-outlet>"
  /** 
   * Para que funcione <router-outlet></router-outlet> se debe agregar la directiva  ROUTER_DIRECTIVES
   * En este caso no funciona el boton atras. Pero en algunos casos puede servir.
   * template: "<router-outlet></router-outlet>"
  */
  
  //template: " <page-router-outlet></page-router-outlet>"
  templateUrl: 'main/main.component.html'
})
@RouteConfig([

  { path: "/sidedrawer-miscarruseles", component: MisCarruseles.AppComponent, name: "MisCarruseles", useAsDefault: true  },
  { path: "/sidedrawer-transitions", component: Administrar.AppComponent, name: "Administrar" },
  { path: "/sidedrawer/nuevo", component: NuevoCarrusel.AppComponent, name: "NuevoCarrusel" },
  { path: "/sidedrawer-configuracion", component: Configuracion.ConfiguracionComponent, name: RoutesManager.CONFIGURAR_RUTE },
  { path: "/sidedrawer-ayuda", component: Ayuda.AyudaComponent, name: RoutesManager.AYUDA_RUTE },

])
export class MainComponent {

}