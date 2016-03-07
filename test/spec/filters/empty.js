'use strict';

describe('Filter: empty', function () {

  // load the filter's module
  beforeEach(module('angularTrainingApp'));

  // initialize a new instance of the filter before each test
  var empty;
  beforeEach(inject(function ($filter) {
    empty = $filter('empty');
  }));

  it('should return the input prefixed with "empty filter:"', function () {
    var text = 'angularjs';
    expect(empty(text)).toBe(text);
  });

});
