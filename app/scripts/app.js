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