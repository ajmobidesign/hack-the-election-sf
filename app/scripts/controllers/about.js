'use strict';

/**
 * @ngdoc function
 * @name angbaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angbaseApp
 */
angular.module('angbaseApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
