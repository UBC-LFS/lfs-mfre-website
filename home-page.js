jQuery(document).ready(function ($) {
  $('.carousel').carousel({
    interval: 6000
  });
  $.each($(".slide-orb"), function (index, value) {
    var num = index + 0;
    $(value).attr("data-slide-to", + num);
  });

  $(".item").first().addClass("active");

  $("#myCarousel2").swiperight(function () {
    $("#myCarousel2").carousel('prev');
  });
  $("#myCarousel2").swipeleft(function () {
    $("#myCarousel2").carousel('next');
  });
}); 