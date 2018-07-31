import $ from 'jquery';
import { Slider } from '../Components/Slider';
import { ScrollModule } from './ScrollModule';

export class SliderModule {

  constructor() {
      this._events();
  }

  _firstInit() {
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

    this.Slider.slick('slickGoTo', this.index);
    this._menuItemsHighlight();
  }

  _events(){
    this.index = 0;
    this.options = {
      fade: true,
      // vertical: true,
      // touchMove: true,
      verticalSwiping: true,
      arrows: false,
      infinite: false,
      speed: 300,
      touchThreshold: 3,
      accessibility: true,
      responsive: [{
        breakpoint: 1121,
        settings: "unslick"
      }]
    };

    if( window.matchMedia('(min-width: 1121px) and (min-height: 530px)').matches ) {
      this.Slider = new Slider('#slider', this.options);
    }

    if( !this.Slider || this.Slider.slick('getSlick').unslicked ) {
      this.scrollModule = new ScrollModule();
    } else {
      this._addSliderEventListeners();
    }

    $(window).on('resize', (e)=>{
      if(
        window.matchMedia('(min-width: 1121px) and (min-height: 530px)').matches &&
        (!this.Slider || this.Slider.slick('getSlick').unslicked)
      ) {
        this.Slider = new Slider('#slider', this.options);
        this._addSliderEventListeners();

        if( this.scrollModule ) {
          this.scrollModule.unbindHandlers();
          this.scrollModule = null;
        }
      }
      // else if(window.matchMedia('(min-width: 1121px) and (max-height: 529px)').matches &&
      //   this.Slider
      // ) {
      //   this.Slider.slick('unslick');
      //   console.log(this.Slider)
      // }
      else if( window.matchMedia('(max-width: 1120px)').matches && !this.scrollModule ) {
        this.scrollModule = new ScrollModule();

        let hash = location.hash;
          console.log(hash)
        if( hash ) {
          let top = $( hash ).offset().top;
          $('body,html').animate({scrollTop: top}, 0);
        }
      }
    });
  }

  _addSliderEventListeners() {
    let timeout = null;

    window.addEventListener('wheel', (e)=> {
      // event.preventDefault();

      clearTimeout(timeout);

      timeout = setTimeout(()=>{
        if (e.deltaY < 0) {
          this.Slider.slick('slickPrev');
        } else if (e.deltaY > 0) {
          this.Slider.slick('slickNext');
        }
      }, 30);
    });

    $(window).on('keydown keyup keypress', (e)=> {
      if (e.which === 37 || e.which === 38 || e.which === 9 && event.shiftKey) {
        this.Slider.slick('slickPrev');
      } else if (e.which === 40 || e.which ===39 || e.which === 9) {
        this.Slider.slick('slickNext');
      }
    });

    $('.menu a, .dots-nav a, .logo a').on('click', (e)=>{
      this.index = $(e.currentTarget).attr('data-slickgoto');
      this.Slider.slick('slickGoTo', this.index);
    });

    this.Slider.on('init', (event, slick, currentSlide, nextSlide)=> {
      $('body').addClass('slider-mode');
    });

    this.Slider.on('destroy', (event, slick, currentSlide, nextSlide)=> {
      $('body').removeClass('slider-mode');
    });

    this.Slider.on('afterChange', (event, slick, currentSlide, nextSlide)=> {
      this._menuItemsHighlight();
    });

    this._firstInit();
  }

    _menuItemsHighlight() {
      let $slide = $('.slick-active');
      let screen =  $slide.find('section').attr('id');

      if( $slide.length ){
        $slide.find('.drop-animation').append( $('[data-drop-animation] canvas') );
        $('[data-drop-animation]').removeAttr('data-drop-animation');
        $slide.attr('data-drop-animation', '');

        this.index = $slide.attr('data-slick-index') <= 4 ? $slide.attr('data-slick-index') : 4;

        $('#header').find('.menu a').toggleClass('active', false);
        $(`.menu a[data-slickgoto="${ this.index }"]`).toggleClass('active', true);

        $('body')[0].className = `${ screen }-screen-bg slider-mode`;
        location.hash = `#${screen}`;
      }
    }

}