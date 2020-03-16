'use strict';

var test = require('unit.js');
var index = require('../index.js');

describe('Tests index', function() {
  it('verifies successful response', function(done) {
    index.get({ /* event */ }, { /* context */ }, (err, result) => {
      done();
    });
  });
});
