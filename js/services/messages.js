app.factory('messages', ['$http', function($http) { 
  return $http.get('http://localhost:80/GrapherView/messages/messages.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);
