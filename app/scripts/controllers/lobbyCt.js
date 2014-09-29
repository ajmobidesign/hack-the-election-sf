'use strict';

/**
 * @ngdoc function
 * @name angbaseApp.controller:LobbyCtrl
 * @description
 * # LobbyCtrl
 * Controller of the angbaseApp
 */
angular.module('angbaseApp')
  .controller('LobbyCtrl', function ($scope, money, contact) {

	$scope.moneyLobby = money.data;
	$scope.contactLobby = contact.data;
	

  });
