/* global jQuery */
jQuery(document).ready(function ($) {
  const profiles = Array.from(document.getElementsByClassName('bordered'))
  if ($(window).width() > 767) {
    for (let i = 0; i < profiles.length; i++) {
      if (i % 2 !== 0) continue
      const profile1Height = $(profiles[i]).height()
      const profile2Height = $(profiles[i + 1]).height()
  
      if (profile1Height < profile2Height) $(profiles[i]).height(profile2Height)
      else $(profiles[i + 1]).height(profile1Height)
    }
  } else {
    profiles.map((profile, i) => {
      if (i % 2 === 0) {
        profiles[i].setAttribute('style', 'margin-bottom: 40px')
      }
    })
  }
})
