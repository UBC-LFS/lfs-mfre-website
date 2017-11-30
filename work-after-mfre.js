/* global jQuery */
jQuery(document).ready(function ($) {
  $('.mfre-slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  })

  const wrap = (urlClass, targetClass) => {
    const elements = document.getElementsByClassName(urlClass)
    const urls = Array.from(elements).map(x => x.innerText.trim())
    const targets = document.getElementsByClassName(targetClass)
    Array.from(targets).map((x, i) => $(x).wrap(`<a href='${urls[i]}' style='display: inherit;'></a>`))
  }

  wrap('company-website', 'company-name')
})
