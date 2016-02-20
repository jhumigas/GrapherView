(function(){
  'use strict';
  
  angular
    .module('GrapherApp')
    .factory('messages', messages);
    
    function messages($http){
        return $http.get('http://localhost:8888/GrapherView/messages/messages.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
    }
})();
