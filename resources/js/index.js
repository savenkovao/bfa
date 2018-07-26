import $ from 'jquery';
import {Helpers} from "./Helpers";
import { DropAnimation } from './Components/DropAnimation';
import { ScrollModule } from './Modules/ScrollModule';
import { Popup } from './Components/Popup';

class App {
    constructor(CONFIG) {
        this.CONFIG = CONFIG;

        this._initModules();
        this._initPlugins();
        this._events();
    }

    // _initApp() {
    //     $('#loader').fadeOut(300);
    // }

    _initModules() {
        new ScrollModule();
        new Popup();
    }

    _events() {
    }

    _initPlugins() {
        new DropAnimation();
    }
}


$('body').ready(() => {
	window.App = new App(window.CONFIG || {});
});