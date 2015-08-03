app.factory('messages', ['$http', function($http) { 
  return $http.get('http://localhost:63342/Grapher%20View/messages/messages.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);
