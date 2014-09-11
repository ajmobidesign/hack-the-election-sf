'use strict';

/**
 * @ngdoc function
 * @name angbaseApp.controller:TypeaheadCtrl
 * @description
 * # TypeaheadCtrl
 * Controller of the angbaseApp
 */
angular.module('angbaseApp')
  .controller('TypeaheadCtrl', function ($scope, $state, $location) {

	$scope.selected = undefined;
	$scope.searchVals =  nameIdx;
	$scope.submit = function (nm) {
		var nm = capFirst(nm);
		if(nameIdx.indexOf(nm) != -1)
			{
			var pathFrag = '/candidates/'+nm + '/';
			//$state.go(pathFrag);
			$location.path(pathFrag)
			console.log(pathFrag)
			}
		else{
			alert("Please enter a valid name");
		}	
		
	}

	//console.log($scope.searchVals);


  });
