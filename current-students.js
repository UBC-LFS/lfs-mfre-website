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
