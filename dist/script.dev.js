"use strict";

var navTop = $("nav.navbar").offset().top;
$(window).scroll(function () {
  var currentScroll = $(window).scrollTop();

  if ($(this).scrollTop()) {
    $("nav.navbar").removeClass("no-bg");
  } else {
    $("nav.navbar").addClass("no-bg");
  }

  if ($(this).scrollTop() > 300) {
    $(".back_to_top").addClass("show");
  } else {
    $(".back_to_top").removeClass("show");
  }
});
$(".back_to_top").click(function () {
  $("html,body").animate({
    scrollTop: 0
  }, 0);
});
$("#contact_form").click(function () {
  $(".contact_form").slideToggle(800);
});