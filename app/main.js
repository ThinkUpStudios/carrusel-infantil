var application_1 = require("nativescript-angular/application");
// >> using-global-directives
var side_drawer_directives_1 = require("nativescript-telerik-ui-pro/sidedrawer/angular/side-drawer-directives");
var listview_directives_1 = require('nativescript-telerik-ui-pro/listview/angular/listview-directives');
var main_component_1 = require("./main/main.component");
// << (hide)
application_1.nativeScriptBootstrap(main_component_1.MainComponent, [listview_directives_1.LISTVIEW_PROVIDERS, side_drawer_directives_1.SIDEDRAWER_PROVIDERS]);
// << using-global-directives 
//# sourceMappingURL=main.js.map