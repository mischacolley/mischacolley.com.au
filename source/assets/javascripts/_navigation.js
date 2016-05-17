jQuery(document).ready(function($){

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

  // Contacts toggle

  $(".contact-toggle").click(function() {
    $('.contact-details').toggleClass('show-contacts');
  }); 

});