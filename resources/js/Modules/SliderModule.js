import $ from 'jquery';
import { BaseModule } from '../Base/BaseModule';
import { Slider } from '../Components/Slider';



export class SliderModule {

  constructor() {
      this._events();
      this._init();
  }

  _init() {
    let hash = location.hash;

    if(hash && this.Slider) {
      switch (hash) {
        case '#about'       : this.index = 0; break;
        case '#demands'     : this.index = 1; break;
        case '#solution'    : this.index = 2; break;
        case '#roadmap'     : this.index = 3; break;
        case '#news'        : this.index = 4; break;
        case '#charts'      : this.index = 5; break;
      }
    }
    // console
    this.Slider.slick('slickGoTo', this.index);
    this._menuItemsHighlight();
  }

  _events(){
    if( window.matchMedia('(min-width: 1121px)').matches ) {   }

    let timeout = null;

    this.index = 0;
    this.options = {
      fade: true,
      // vertical: true,
      // touchMove: true,
      verticalSwiping: true,
      arrows: false,
      infinite: false,
      speed: 300,
      responsive: [{
        breakpoint: 1200,
        settings: "unslick"
      }]
    };

    this.Slider = new Slider('#slider', this.options);

    window.addEventListener('wheel', (e)=> {
      event.preventDefault();
      console.log(e)
      clearTimeout(timeout);
console.log('wheel 12')
      timeout = setTimeout(()=>{
        if (e.deltaY < 0) {
          this.Slider.slick('slickPrev');
        } else if (e.deltaY > 0) {
          this.Slider.slick('slickNext');
        }
      }, 50);
    });

    $('.menu a, .dots-nav a').on('click', (e)=>{
      this.index = $(e.currentTarget).attr('data-slickgoto');
      this.Slider.slick('slickGoTo', this.index);
    });

    this.Slider.on('afterChange', (event, slick, currentSlide, nextSlide)=> {
      this._menuItemsHighlight();
    });

    $(window).on('resize', (e)=>{
      if( window.matchMedia('(min-width: 1121px)').matches && !this.Slider.hasClass('slick-slider') ) {
        console.log('adss')
        this.Slider = new Slider('#slider', this.options);
      }
    });


  }

    _menuItemsHighlight() {
      let $slide = $('.slick-active');
      let screen =  $slide.find('section').attr('id');

      this.index = $slide.attr('data-slick-index') <= 4 ? $slide.attr('data-slick-index') : 4;

      $('#header').find('.menu a').toggleClass('active', false);
      $(`.menu a[data-slickgoto="${ this.index }"]`).toggleClass('active', true);

      $('body')[0].className = `${ screen }-screen-bg`;
      location.hash = `#${screen}`;
    }

}