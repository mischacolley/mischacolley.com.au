jQuery(document).ready(function($){

    $(".contact-toggle").click(function() {
      $('.contact-details').toggleClass('show-contacts');
    }); 

    $(".thumbs:not(.selected)").hover()


    // Set div etc to match the height of another and adjust on window resize
  
    $(window).on('load resize', function() {
      if ($(window).width() > 500) {
        $.fn.setAllToMaxHeight = function() {
          return this.height(Math.max.apply(this, $.map(this, function(e) {
            return $(e).height();
          })));
        };
        
        $('.box-container p').setAllToMaxHeight();
      }
      if ($(window).width() > 768) {
        $.fn.setAllToMaxHeight = function() {
          return this.height(Math.max.apply(this, $.map(this, function(e) {
            return $(e).height();
          })));
        };
  
        $('.latest-posts article .panel').setAllToMaxHeight();
        $('.projects article .panel').setAllToMaxHeight();
      }
    });

    $(window).on('load', function() {

      if ($(window).width() < 769) {
        
        $('.work-list img').slice(-3).remove();
      }

    });

    $('.scroll-down, .about-link').click(function(e) {
      // Prevent the jump and the #hash from appearing on the address bar
      e.preventDefault();
      // Scroll the window, stop any previous animation, stop on user manual scroll
      // Check https://github.com/flesler/jquery.scrollTo for more customizability
      $(window).stop(true).scrollTo(this.hash, {duration:1000, offset:-82, interrupt:true});
    });

    $(".menu-contact").click(function() {
      $('#contact').ScrollTo({
          duration: 1000,
          easing: 'linear'
      });
    }); 

    $(".menu-toggle").click(function() {
        $("body").toggleClass("menu-toggled");
        $('.menu-toggle i').toggleClass('fa-bars fa-times');
    });  

    $(document).on('click', ".menu-primary-menu-container ul li a.anchor", function() {
      $('body').removeClass('menu-toggled');
      $('.menu-toggle i').toggleClass('fa-times fa-bars');
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

  // Twitter Feed config

  $('body.index').each(function(){
    
    var twitter_config = {
      "id": '491177790104813569',
      "domId": 'twitter-feed',
      "maxTweets": 1,
      "enableLinks": true
    };
    twitterFetcher.fetch(twitter_config);
  
  });

}); 


