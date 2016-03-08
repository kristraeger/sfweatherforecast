app.factory('forecast', ['$http', function($http) { 
  return $http.get('http://api.wunderground.com/api/e4fd42f555ecb9d3/forecast10day/q/CA/San_Francisco.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);