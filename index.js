var slice = require('sliced')
var xhr   = require('xhr')
var noop  = function noop(){}

module.exports = inject


function inject(element, callback) {
  callback = typeof callback === 'function' ? callback : noop

  var url = element.getAttribute('src')
  if (!url) return

  var attributes = slice(element.attributes).map(function(attr) {
    return [attr.name, attr.value]
  })

  xhr({
    uri: url
  }, function(err, res, body) {
    if (err) return callback(err)

    if (!res.responseXML) {
      return callback(new Error(
        'Invalid SVG file: ' + url
      ))
    }

    var svg = res.responseXML.querySelector('svg')
    for (var i = 0; i < attributes.length; i++) {
      svg.setAttribute(attributes[i][0], attributes[i][1])
    }

    if (element.parentNode) {
      element.parentNode.replaceChild(svg, element)
    }

    callback(null, svg)
  })
}
