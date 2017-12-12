/* global jQuery */
jQuery(document).ready(function ($) {
  $('.carousel').carousel({
    interval: 6000
  })
  $.each($('.slide-orb'), function (index, value) {
    var num = index + 0
    $(value).attr('data-slide-to', +num)
  })
  $('.item').first().addClass('active')

  // $("#myCarousel2").swiperight(function () {
  //   $("#myCarousel2").carousel('prev');
  // });
  // $("#myCarousel2").swipeleft(function () {
  //   $("#myCarousel2").carousel('next');
  const wrap = (urlClass, targetClass) => {
    const elements = document.getElementsByClassName(urlClass)
    const urls = Array.from(elements).map(x => x.innerText.trim())
    const targets = document.getElementsByClassName(targetClass)
    Array.from(targets).map((x, i) => $(x).wrap(`<a href='${urls[i]}' style='display: inherit;'></a>`))
  }

  wrap('carousel-link-source', 'carousel-link-target')
})
