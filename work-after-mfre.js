/* global jQuery */
jQuery(document).ready(function ($) {
  $('.mfre-slider').slick()

  const companyWebsite = document.getElementById('company-website').innerText

  const wrapper = `<a href='${companyWebsite}' style='display: inherit;'></a>`

  $('#company-name').wrap(wrapper)
})
