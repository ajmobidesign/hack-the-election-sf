'use strict';

/**
 * @ngdoc function
 * @name angbaseApp.controller:IncumbentsCtrl
 * @description
 * # CandidatesCtrl
 * Controller of the angbaseApp
 */
angular.module('angbaseApp')
  .controller('IncumbentsCtrl', function ($scope) {

  	$scope.cand_list = brdOSup;
  	$scope.incumbents = incum;


  	

  })