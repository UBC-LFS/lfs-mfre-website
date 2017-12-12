jQuery(document).ready(function ($) {
  $('.carousel').carousel({
    interval: 6000
  })
  $.each($('.slide-orb'), function (index, value) {
    var num = index + 0
    $(value).attr('data-slide-to', +num)
  })

  $('.item').first().addClass('active')

  $('#myCarousel2').swiperight(function () {
    $('#myCarousel2').carousel('prev')
  })
  $('#myCarousel2').swipeleft(function () {
    $('#myCarousel2').carousel('next')
  })
})

/* global jQuery */
jQuery(document).ready(function ($) {
  const span12 = '<div class="span12" style="margin-left:0px;"></div>'

  const profiles = document.getElementsByClassName('profiles')
  Array.from(profiles).map((x, i) => (x.className += (' level' + Math.floor(i / 4))))

  for (let i = 0; i < profiles.length; i++) {
    if (i % 4 === 0) {
      $('.level' + Math.floor(i / 4)).wrapAll(span12)
    }
  }
})
