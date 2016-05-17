jQuery(document).ready(function($){

  // Set div etc to match the height of another and adjust on window resize
  // TODO: Replace with CSS solution
  
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

});