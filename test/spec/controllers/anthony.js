'use strict';

describe('Controller: AnthonyCtrl', function () {

  // load the controller's module
  beforeEach(module('angularTrainingApp'));

  var AnthonyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AnthonyCtrl = $controller('AnthonyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AnthonyCtrl.awesomeThings.length).toBe(3);
  });
});
