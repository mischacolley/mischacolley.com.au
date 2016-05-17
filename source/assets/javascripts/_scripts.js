jQuery(document).ready(function($){

  $(".thumbs:not(.selected)").hover()


  $(window).on('load', function() {

    if ($(window).width() < 769) {
      
      $('.work-list img').slice(-3).remove();
    }

  });
  
  $(window).scroll(function() {
    
    if ($(window).scrollTop() > 50) {
      $('header').addClass('scrolled');
    } else {
      $('header').removeClass('scrolled');
    };
  });


  $('.about-summary').waypoint(function(direction) {
    if (direction === 'down') {
        $('header').addClass('at-panel-two');
    }
    }, {
      offset: '103'
    }).waypoint(function(direction) {
      if (direction === 'up') {
        $('header').removeClass('at-panel-two');
      }
    }, {
      offset: '103'
  });

}); 


