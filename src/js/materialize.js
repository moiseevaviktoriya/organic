'use strict';

import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

require('materialize-css');

$(document).ready(function(){
    $('.carousel.carousel-slider').carousel({
        indicators: true,
        numVisible: 1,
        fullWidth: true
    });
});