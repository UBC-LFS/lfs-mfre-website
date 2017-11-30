/* global jQuery */
jQuery(document).ready(function ($) {
  $('.mfre-slider').slick()

  const wrap = (urlID, targetID) => {
    const url = document.getElementById(urlID).innerText
    const wrapper = `<a href='${url}' style='display: inherit;'></a>`
    $('#' + targetID).wrap(wrapper)
  }

  wrap('company-website', 'company-name')
  wrap('link', 'read-more')
})
