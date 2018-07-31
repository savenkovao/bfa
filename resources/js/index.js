import $ from 'jquery';
import { DropAnimation } from './Components/DropAnimation';
import { SliderModule } from './Modules/SliderModule';
import { HeaderComponent } from './Components/Header';
import { YoutubeVideoFrame } from './Components/YoutubeVideoFrame';

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
    }

    _initComponents() {
        new HeaderComponent();
      this.youtubeVideoFrame = new YoutubeVideoFrame();
    }


    _initPlugins() {
        new DropAnimation();
    }

    _events() {
    }
}


$('body').ready(() => {
	window.App = new App(window.CONFIG || {});
});