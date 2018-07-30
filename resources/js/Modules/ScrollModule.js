import $ from 'jquery';
import { BaseModule } from '../Base/BaseModule';

export class ScrollModule extends BaseModule{

  constructor() {
    super();
    this._init();
  }

  _events(){
    let that = this;
    $(window).on('scroll', ()=>{
      that._menuItemsHighlight()
    });


    $(".menu, .dots-nav").on("click", "a", function (event) {
      if( $(this).attr('href').substring(0,1) === '#') {
        event.preventDefault();
        let id = $(this).attr('href'),
          top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
      }
    });
  }

  unbindHandlers() {
    let that = this;
    $(window).off('scroll', that._menuItemsHighlight);
  }

  _init() {
    this._menuItemsHighlight();
  }

  _menuItemsHighlight() {
    let windowTopPosition = $(window)[0].pageYOffset,
      windowBottomPosition = $(window)[0].pageYOffset + $(window)[0].innerHeight,
      $items = $('section');


    $items.each( (i, item) => {
      if ( windowTopPosition >= $(item).offset().top - 20 && windowTopPosition < $(item).offset().top + $(item).height() +20) {
        this._toggleMenuItem(item);
        $('body')[0].className = `${ $(item).attr('id') }-screen-bg`;
      }
    });
  }

  _toggleMenuItem(item) {
    let $dropAnimation = $(item).find('.drop-animation');
    $('#header')
      .find('.menu a').toggleClass('active', false).end()
      .find( `[href="#${ $(item).attr('data-id') }"]` ).toggleClass('active', true);


    if( !$dropAnimation[0].hasAttribute('data-drop-animation') ) {
      $dropAnimation.append( $('[data-drop-animation] canvas') );
      $('[data-drop-animation]').removeAttr('data-drop-animation');
      $(item).find('.drop-animation').attr('data-drop-animation', '');
    }
  }
}