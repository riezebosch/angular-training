'use strict';

describe('Filter: empty', function () {

  // load the filter's module
  beforeEach(module('angularTrainingApp'));

  // initialize a new instance of the filter before each test
  var empty;
  beforeEach(inject(function ($filter) {
    empty = $filter('empty');
  }));

  it('should return input for an empty filter', function () {
    var text = 'angularjs';
    expect(empty(text)).toBe(text);
  });
  
  it('should return bladiebla as custom empty text', function () {
      var msg ='bladiebla';
      expect(empty(null, msg)).toBe(msg);
  })
  
  it('should return the output in an array for input with an array', function () {
    var msg = 'bladiebla';
    var result = empty(new Array(), msg);
     
    expect(result.length).toBe(1);
    expect(result[0]).toBe(msg);
  })

  it('demo van spy', function () {
      var m = {
          save: function (input) {
              console.log("save function called, value: " + input);
          }
      }
      
      spyOn(m, 'save').and.callFake(function (input) {
          console.log("fake save function called, value: " + input);
      })
      m.save('<INPUT>');
  });
});
