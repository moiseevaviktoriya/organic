import $ from 'jquery';

$( document ).ready(function() {
  $('.review_indicator').on('click', function(event) {
      if (!$(this).hasClass('active_indicator')) {
          $('.active_indicator').removeClass('active_indicator');
          $('.active_review').removeClass('active_review');
          $(this).addClass('active_indicator');
          $('#' + $(this).data("type")).addClass('active_review');
      } else if (event.target !== $('.active_indicator')[0]) {
          $('.active_indicator').removeClass('active_indicator');
          $('#' + $(this).data("type")).removeClass('active_review');
      }
  })
});

$( document ).ready(function() {
    $( ".form-button" ).click(function(event) {
        event.preventDefault();
      $( ".form_row" ).slideUp( "slow", function() {
        $('.bird').addClass('animated-bird');
        $('.bird-container').addClass('animated-bird-container');
      });
    });
});
