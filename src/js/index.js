require('./counter.js');
require('./lightbox.js');
require('./materialize.js');
require('./map.js');


import $ from 'jquery';
import WOW from 'wow.js';


$( document ).ready(function() {
  $('.header__menu-toggle').on('click', function() {
      $('.header__nav').slideToggle(500);
      $(this).find('span').toggleClass('open');
  });
    
    new WOW().init();
    
});

