import $ from 'jquery';
import { BaseComponent } from '../Base/BaseComponent';

export class HeaderComponent extends BaseComponent {

    constructor() {
        super();
    }

    _events() {
        $(document).on('click', '.brgr-menu', (e)=>{
            toggleMobileMenu();
        });
        $(document).on('click', '.header-login.mobile-show', (e)=>{
            toggleMobileMenu();
        });

        function toggleMobileMenu() {
            let $target = $('.brgr-menu');
            $target.closest('.header').find('.menu').slideToggle();
            $target.toggleClass('active');
        }

      $(window).on('resize', (e)=> {
        if (window.matchMedia("(min-width: 1121px)").matches) {
          $('.menu').removeAttr('style');
          $('.brgr-menu').removeClass('active');
        }
      });


    }

}
