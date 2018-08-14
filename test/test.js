/* eslint-disable no-var,quotes,func-names,no-undef,indent-legacy,indent,array-element-newline,max-len,prefer-arrow-callback */
const getCourse = require('../Company');

var assert = require('assert');
describe('Test', function() {
  describe('Course', function() {
    it('Курс', function() {
      assert.equal(typeof getCourse(), 'object');
    });
  });
});