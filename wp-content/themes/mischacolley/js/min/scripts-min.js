jQuery(document).ready(function($){$(".find-out-more").click(function(){$(".about-copy-more").toggle("slow",function(){})}),$(".scroll-down, .menu-about").click(function(){$("#about").ScrollTo({duration:2e3,easing:"linear"})}),$(".menu-contact").click(function(){$("#contact").ScrollTo({duration:2e3,easing:"linear"})}),$(".menu-toggle").click(function(){$(".menu-primary-menu-container").toggleClass("hide")}),$(window).scroll(function(){$(window).scrollTop()>50?$("header").addClass("scrolled"):$("header").removeClass("scrolled")}),$(".about").waypoint(function(o){"down"===o&&$("header").addClass("at-panel-two")},{offset:"103"}).waypoint(function(o){"up"===o&&$("header").removeClass("at-panel-two")},{offset:"103"})});