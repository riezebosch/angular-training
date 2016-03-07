'use strict';

/**
 * @ngdoc filter
 * @name angularTrainingApp.filter:empty
 * @function
 * @description
 * # empty
 * Filter in the angularTrainingApp.
 */
angular.module('angularTrainingApp')
  .filter('empty', function () {
    return function (input, emptyText) {
        if (input !== undefined && input !== null && input.length !== 0) {
            return input;
        }
        if (emptyText !== undefined) {
            return [ emptyText ];
        }
      
      return [ '-asdf' ];
    };
  });
