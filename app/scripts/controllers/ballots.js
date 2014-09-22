'use strict';

/**
 * @ngdoc function
 * @name angbaseApp.controller:BallotsCtrl
 * @description
 * # BallotsCtrl
 * Controller of the angbaseApp
 */
angular.module('angbaseApp')
  .controller('BallotsCtrl', function ($scope) {

  	$scope.ballot_list = ballots;
  	

  })