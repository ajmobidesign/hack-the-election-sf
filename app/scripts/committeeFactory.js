angular.module('angbaseApp')
  .factory('PropCommitteeFactory', function ($q, $http) {
    return function(naml) {
      var na = naml;

      /*
      console.log(naml)
      var isArr = Array.isArray(naml);
      console.log(isArr)
      var na;
      if(isArr){
      na = "$where=";
      if (naml.length>1){
          for(n in naml){
            //console.log(n, naml.length)
            if(n< naml.length-1){
              na+= "filer_naml ='"+ naml[n] + "' OR ";
            }
            else{
              na+="filer_naml ='"+ naml[n] + "'";
            } 
          }
        }
        else{
          na = "filer_naml= " + naml[0] ;
        }
      }
      else{
        na=naml;
      }
      */
       //need to resolve how to get data if the json is 1000
      this.getSchA = function () {
        var url = "http://data.sfgov.org/resource/q66q-d2tr.json?"+na;
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
      this.getSchE=function () {
        var url = "http://data.sfgov.org/resource/hc26-j9if.json?" +na;
        
        var deferred = $q.defer(),
          httpPromise = $http.get(url);
 
        httpPromise.then(function (response) {
          deferred.resolve(response);
        }, function (error) {
          console.error(error);
        });
 
        return deferred.promise;
      };
      this.getSum= function () {
        var url = "http://data.sfgov.org/resource/4tts-fyix.json?" +na;
        
        var deferred = $q.defer(),
          httpPromise = $http.get(url);
 
        httpPromise.then(function (response) {
          deferred.resolve(response);
        }, function (error) {
          console.error(error);
        });
 
        return deferred.promise;
      }
    };
  })
    .factory('CommitteeFactory', function ($q, $http) {
    return function(naml) {
    
       //need to resolve how to get data if the json is 1000
      this.getSchA = function () {
        var url = "http://data.sfgov.org/resource/q66q-d2tr.json?filer_naml="+naml;
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
      this.getSchE=function () {
        var url = "http://data.sfgov.org/resource/hc26-j9if.json?filer_naml=" +naml;
        
        var deferred = $q.defer(),
          httpPromise = $http.get(url);
 
        httpPromise.then(function (response) {
          deferred.resolve(response);
        }, function (error) {
          console.error(error);
        });
 
        return deferred.promise;
      };
      this.getSum= function () {
        var url = "http://data.sfgov.org/resource/4tts-fyix.json?filer_naml=" +naml;
        
        var deferred = $q.defer(),
          httpPromise = $http.get(url);
 
        httpPromise.then(function (response) {
          deferred.resolve(response);
        }, function (error) {
          console.error(error);
        });
 
        return deferred.promise;
      }
    };
  })