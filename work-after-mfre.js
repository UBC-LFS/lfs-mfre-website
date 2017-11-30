/* global jQuery */
jQuery(document).ready(function ($) {
  $('.mfre-slider').slick()

  const wrapCompanyURl = () => {
    const companyWebsite = document.getElementById('company-website').innerText
    const wrapper = `<a href='${companyWebsite}' style='display: inherit;'></a>`
    $('#company-name').wrap(wrapper)
  }

  const wrapReadMore = () => {
    const link = document.getElementById('link').innerText
    const wrapper = `<a href='${link}''></a>`
    $('#read-more').wrap(wrapper)
  }

  wrapCompanyURl()
  wrapReadMore()
})
