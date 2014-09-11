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
  	/*Summary Data */
  	/*
	var period1={'dates': ['2013-01-01T00:00:00', '2013-06-30T00:00:00'],
	'line_12': 0,
	'line_13': 0,
	'line_14': 0,
	'line_15': 0, 
	'line_16': 0

	}

	var period2={'dates': ['2013-07-01T00:00:00', '2013-12-31T00:00:00'],
	'line_12': 500.00,
	'line_13': 192507.00,
	'line_14': 0.00,
	'line_15': 7728.71,
	'line_16': 185278.29

	}

	var period3={'dates': ['2014-01-01T00:00:00', '2014-06-30T00:00:00'],
	'line_12': 184778.29,
	'line_13': 132455.00,
	'line_14': 0.00,
	'line_15': 47202.52,
	'line_16': 270030.76

	}
	*/

	$scope.sumData = summaryProcess(summary.data);
	//[period1, period2, period3];
	$scope.schAData = schA.data;
	$scope.schEData= schE.data;

	




  });
