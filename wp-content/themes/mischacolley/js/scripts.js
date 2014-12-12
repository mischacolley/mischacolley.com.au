jQuery(document).ready(function($){

    // $( ".find-out-more" ).click(function() {
    //   $( ".about-copy-more" ).toggle( "slow", function() {
    //   });
    // });

    $(".scroll-down, .menu-about").click(function() {
      $('#about').ScrollTo({
          duration: 1000,
          easing: 'linear'
      });
    }); 

    $(".menu-contact").click(function() {
      $('#contact').ScrollTo({
          duration: 1000,
          easing: 'linear'
      });
    }); 

    $(".menu-toggle").click(function() {
        $(".menu-primary-menu-container").toggleClass("hide");
    });  
  
  $(window).scroll(function() {
    
    if ($(window).scrollTop() > 50) {
      $('header').addClass('scrolled');
    } else {
      $('header').removeClass('scrolled');
    };
  });


  $('.about').waypoint(function(direction) {
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


