import $ from 'jquery';
require('./../vendors/3d_particle_plugin/dist/js/demo-5/index.bundle.js');
import { SliderModule } from './Modules/SliderModule';
import { HeaderComponent } from './Components/Header';
import { YoutubeVideoFrame } from './Components/YoutubeVideoFrame';

class App {
    constructor(CONFIG) {
        this.CONFIG = CONFIG;

        this._initModules();
        this._initComponents();
    }
    _initModules() {
        this.sliderModule = new SliderModule();
    }

    _initComponents() {
        new HeaderComponent();
        this.youtubeVideoFrame = new YoutubeVideoFrame();
    }
}


$('body').ready(() => {
	window.App = new App(window.CONFIG || {});
});