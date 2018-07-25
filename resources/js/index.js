import $ from 'jquery';
import {Helpers} from "./Helpers";
import { DropAnimation } from './Components/DropAnimation';

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
    }

    _events() {
        console.log('App initeASAsaQWERQWEQWd')
    }

    _initPlugins() {
        new DropAnimation();
    }
}


$('body').ready(() => {
	window.App = new App(window.CONFIG || {});
});