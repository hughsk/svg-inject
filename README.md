# svg-inject [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Replace an `<img>` element with an inline SVG. This way you can still earn
the benefits of not inlining every occurence of an SVG, but still *style
their contents using CSS selectors*. This makes adding hover states and the like
much more straightforward :)

## Usage

[![NPM](https://nodei.co/npm/svg-inject.png)](https://nodei.co/npm/svg-inject/)

### inject(element, [callback]) ###

Replace the `<img>` `element` with an SVG, calling `callback(err, svg)` when
complete.

``` javascript
// Replaces all existing SVG images on the DOM with inline SVGs:
var inject = require('svg-inject')
var svgs = document.querySelector('img[src$=".svg"]')

for (var i = 0; i < svgs.length; i++) {
  inject(svgs[i], function(err, svg) {
    if (err) throw err
    // do additional things with `svg` here if you like.
  })
}
```

## See Also

* [Manipulating SVG Icons with Simple CSS](http://webdesign.tutsplus.com/articles/manipulating-svg-icons-with-simple-css--webdesign-15694)
* [Using CSS to display state within an icon](http://tutsplus.github.io/Styling-Iconic/state/index.html)

## License

MIT. See [LICENSE.md](http://github.com/hughsk/svg-inject/blob/master/LICENSE.md) for details.
