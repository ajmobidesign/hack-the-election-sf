'use strict';

/**
 * @ngdoc overview
 * @name angbaseApp
 * @description
 * # angbaseApp
 *
 * Main module of the application.
 */
angular
  .module('angbaseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap', 
    'appDirectives'
  ]).config(function($stateProvider, $urlRouterProvider) {
  
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "/views/home.html",
        controller:'TypeaheadCtrl'
      })
      .state('candidates', {
        url: "/candidates",
        templateUrl: "/views/candidates.html", 
        controller:'CandidatesCtrl'
      })
      .state('candidatesNames', {
        url: "/candidates/:name/",
        templateUrl: "/views/details.html", 
        controller:'DetailsCtrl',
        resolve:{
          schA: function($stateParams, CommitteeFactory){
            var idx = nameIdx.indexOf($stateParams.name);
            var nm = brdIdx[idx].filer_naml;
            return (new CommitteeFactory(nm)).getSchA();
           
          },
           schE: function($stateParams, CommitteeFactory){
            var idx = nameIdx.indexOf($stateParams.name);
            var nm = brdIdx[idx].filer_naml;
            return (new CommitteeFactory(nm)).getSchE();
          },
           summary: function($stateParams, CommitteeFactory){
            var idx = nameIdx.indexOf($stateParams.name);
            var nm = brdIdx[idx].filer_naml;
            return (new CommitteeFactory(nm)).getSum();
          }
        }
      })
      .state('ballotCmtNames', {
        url: "/prop/:name/",
        templateUrl: "/views/details.html", 
        controller:'DetailsCtrl',
        resolve:{
          schA: function($stateParams, PropCommitteeFactory){
            //console.log($stateParams.name)
            return (new PropCommitteeFactory($stateParams.name)).getSchA();
          },
           schE: function($stateParams, PropCommitteeFactory){
            return (new PropCommitteeFactory($stateParams.name)).getSchE();
          },
           summary: function($stateParams, PropCommitteeFactory){
            return (new PropCommitteeFactory($stateParams.name)).getSum();
          }
        }
      })
      .state('props', {
        url: "/props",
        templateUrl: "/views/props.html", 
        controller:''
      })
       .state('blog', {
        url: "/blog",
        templateUrl: "/views/blog.html", 
        controller:''
      })
       .state('incumbents', {
        url: "/incumbents",
        templateUrl: "/views/incumbents.html", 
        controller:''
      })
      .state('incumbentIds', {
        url: "/incumbents/:id/",
        templateUrl: "/views/details.html", 
        controller:'DetailsCtrl',
        resolve:{
          schA: function($stateParams, IncumbentCommitteeFactory){
            return (new IncumbentCommitteeFactory($stateParams.id)).getSchA();
          },
           schE: function($stateParams, IncumbentCommitteeFactory){
            return (new IncumbentCommitteeFactory($stateParams.id)).getSchE();
          },
           summary: function($stateParams, IncumbentCommitteeFactory){
            return (new IncumbentCommitteeFactory($stateParams.id)).getSum();
          }
        }
      })
      .state('incumbentLobby', {
        url: "/lobby/:lb/",
        templateUrl: "/views/lobby.html", 
        controller:'LobbyCtrl',
        resolve:{
          money: function($stateParams, LobbyFactory){
            return (new LobbyFactory ($stateParams.lb)).getLobbyMoney();
          },
          contact: function($stateParams, LobbyFactory){
            return (new LobbyFactory($stateParams.lb)).getLobbyContact();
          }
        }
      })
      .state('about', {
        url: "/about",
        templateUrl: "/views/about.html"
      })
    
});

  /*
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: ''
      })
      .when('/candidates', {
        templateUrl: 'views/candidates.html',
        controller: 'CandidatesCtrl'
       /* resolve: {
          schA: function (schAFactory) {
            return schAFactory.getData();
          }
        }

      
      })
      .when('/candidates/Farrell', {
        templateUrl: 'views/details.html',
        controller: ''
      })
      .when('/props', {
        templateUrl: 'views/props.html',
        controller: 'AboutCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
*/