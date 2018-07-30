import $ from 'jquery';
import {Helpers} from "./Helpers";
// import { DropAnimation } from './Components/DropAnimation';
import { ScrollModule } from './Modules/ScrollModule';
import { Popup } from './Components/Popup';
import { HeaderComponent } from './Components/Header';
import { Slider } from './Components/Slider';
import { SliderModule } from './Modules/SliderModule';

class App {
    constructor(CONFIG) {
        this.CONFIG = CONFIG;

        this._initModules();
        this._initPlugins();
        this._initComponents();
        this._events();
    }

    // _initApp() {
    //     $('#loader').fadeOut(300);
    // }

    _initModules() {
            this.sliderModule = new SliderModule();

            // new ScrollModule();
        // if( !this.sliderModule.Slider ) {
        // }
    }

    _initComponents() {
        new HeaderComponent();
    }


    _initPlugins() {
        new Popup();
        // new DropAnimation();

    }

    _events() {
    }
}


$('body').ready(() => {
	window.App = new App(window.CONFIG || {});
});