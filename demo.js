var inject = require('./')

require('domready')(function() {
  ;[].slice.call(
    document.querySelectorAll('img[src$=".svg"]')
  ).forEach(inject)
})
