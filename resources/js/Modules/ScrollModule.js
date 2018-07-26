import $ from 'jquery';
import { BaseModule } from '../Base/BaseModule';



export class ScrollModule extends BaseModule{

  constructor() {
    super();
    this._init();
  }

  _events(){
    $(window).on('scroll', () =>{
      if( window.matchMedia("(min-width: 768px)").matches ){
        this._menuItemsHighlight();
      }
    });
  }

  _init() {
    this._initMenuItemsHighlight()
  }

  _initMenuItemsHighlight() {
    this._menuItemsHighlight();
  }

  _menuItemsHighlight() {
    let windowTopPosition = $(window)[0].pageYOffset,
      windowBottomPosition = $(window)[0].pageYOffset + $(window)[0].innerHeight,
      $items = $('section');

    $items.each( (i, item) => {
      if ( windowBottomPosition >= $(item).offset().top + 50 ) {
        this._toggleMenuItem(item);
      }

      if ( windowTopPosition >= $(item).offset().top ) {
        $('body')[0].className = `${ $(item).attr('id') }-screen-bg`;
      }
    });
  }

  _toggleMenuItem(item) {
    $('#header')
      .find('.menu a').toggleClass('active', false).end()
      .find( `[href="#${ $(item).attr('data-id') }"]` ).toggleClass('active', true);

  }
}