"use strict";

var navTop = $("nav.navbar").offset().top;
$(window).scroll(function () {
  var currentScroll = $(window).scrollTop();

  if ($(this).scrollTop()) {
    $("nav.navbar").removeClass("no-bg");
    $("#back_to_top").fadeIn();
  } else {
    $("nav.navbar").addClass("no-bg");
    $("#back_to_top").fadeOut();
  }

  if (Math.round($(this).scrollTop()) == $(document).height() - $(window).height()) {
    $("#back_to_bottom").fadeOut();
  } else {
    $("#back_to_bottom").fadeIn();
  }
});
$("#back_to_top").click(function () {
  $("html,body").animate({
    scrollTop: 0
  }, 0);
});
$("#back_to_bottom").click(function () {
  $("html,body").animate({
    scrollTop: $(document).height() - $(window).height()
  }, 0);
});
$("#contact_form").click(function () {
  $(".contact_form").slideToggle(800);
});