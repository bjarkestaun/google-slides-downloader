var request = require('request');
var htmlparser = require("htmlparser2");
var traverse = require('./htmlTraverser');

module.exports = {
  // returns a promise that when resolved gives the raw html from a url
  getHtml: function (url, callback) {
    request(url, function (error, response, body) {
      if (error) {
        callback(error);
      } else {
        callback(null, body);
      }
    });
  },

  // takes a string of raw html
  // converts it to a collection using htmlparser
  // and traverses the collection and gets the SVG elements from it using the htmlTraverser
  // returns array of SVGs
  // not async so simply returns result
  convert: function (rawHtml) {
    var dom = htmlparser.parseDOM(rawHtml);
    return traverse(dom);
  },

  // takes a URL
  // returns a promise that when resolves gives an array of the SVGs on that URL location
  getSVGs: function (url, callback) {
    module.exports.getHtml(url, function (error, html) {
      if (error) {
        callback(error);
      } else {
        var result = module.exports.convert(html);
        callback(null, result);
      }
    });
  }
};
