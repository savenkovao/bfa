import $ from 'jquery';
import { DropAnimation } from './Components/DropAnimation';
import { ScrollModule } from './Modules/ScrollModule';
import { SliderModule } from './Modules/SliderModule';
import { HeaderComponent } from './Components/Header';
// import { Popup } from './Components/Popup';

class App {
    constructor(CONFIG) {
        this.CONFIG = CONFIG;

        this._initModules();
        this._initPlugins();
        this._initComponents();
        this._events();
    }
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
        // new Popup();
        new DropAnimation();
    }

    _events() {
    }
}


$('body').ready(() => {
	window.App = new App(window.CONFIG || {});
});