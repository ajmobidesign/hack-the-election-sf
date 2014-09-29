angular.module('angbaseApp')
  .factory('LobbyFactory', function ($q, $http) {
    return function(naml) {
       //need to resolve how to get data if the json is 1000
      this.getLobbyContact = function () {
        var url = 'http://data.sfgov.org/resource/hr5m-xnxc.json?official='+naml;
        console.log(url)
        var deferred = $q.defer(),
          httpPromise = $http.get(url);
 
        httpPromise.then(function (response) {
          deferred.resolve(response);
        }, function (error) {
          console.error(error);
        });
 
        return deferred.promise;
      };
      this.getLobbyMoney=function () {
        var url = 'http://data.sfgov.org/resource/sa8r-purn.json?official='+naml;

        console.log(url)
        
        var deferred = $q.defer(),
          httpPromise = $http.get(url);
 
        httpPromise.then(function (response) {
          deferred.resolve(response);
        }, function (error) {
          console.error(error);
        });
 
        return deferred.promise;
      };
    }

  });