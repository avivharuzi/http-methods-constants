'use strict';

var assert = require('assert');
var http = require('http');

var httpMethods = require('./index');

assert.equal(
  http.METHODS.length,
  Object.keys(httpMethods).length,
  'http.methods must be equal length with httpMethod',
);

http.METHODS.forEach(function (method) {
  assert.equal(method, httpMethods[method], method + ' from http module must be inside httpMethod');
});
