'use strict';

/**
 * @ngdoc function
 * @name angbaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angbaseApp
 */
angular.module('angbaseApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
