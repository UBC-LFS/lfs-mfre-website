jQuery(document).ready(function ($) {
  $('.carousel').carousel({
    interval: 6000
  })
  $.each($('.slide-orb'), function (index, value) {
    var num = index + 0
    $(value).attr('data-slide-to', +num)
  })

  $('.item').first().addClass('active')

  const wrap = (urlClass, targetClass) => {
    const elements = document.getElementsByClassName(urlClass)
    const urls = Array.from(elements).map(x => x.innerText.trim())
    const targets = document.getElementsByClassName(targetClass)
    Array.from(targets).map((x, i) => $(x).wrap(`<a href='${urls[i]}' style='display: inherit;'></a>`))
  }

  wrap('carousel-link-source', 'carousel-link-target')
})
