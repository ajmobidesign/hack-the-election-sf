'use strict';

/**
 * @ngdoc function
 * @name angbaseApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the angbaseApp
 */
angular.module('angbaseApp')
  .controller('DetailsCtrl', function ($scope, summary, schA, schE) {

	$scope.sumData = summaryProcess(summary.data);
	console.log($scope.SumData)

	$scope.$watch('sumData', function(newValue, oldValue){
		if(newValue != undefined){
				$scope.totalRaised = $scope.sumData.reduce(function(memo, item){
					memo = memo + item.line_13;
					return memo;
				}, 0);

				$scope.totalRaised = dollar(Math.round($scope.totalRaised ));

				$scope.totalSpent = $scope.sumData.reduce(function(memo, item){
					memo = memo + item.line_15;
					return memo;
				}, 0);

				$scope.bal = $scope.sumData[$scope.sumData.length -1].line_16;

				$scope.totalSpent = dollar(Math.round($scope.totalSpent ));

			}

	}, true)
			

	

	$scope.schAData = schA.data;
	
	$scope.schEData= schE.data;
	$scope.fullSum = summary.data;

  });
