(function(){
  'use strict';
  
  angular
    .module('GrapherApp')
    .directive('timelineApp', timelineApp);
    
    function timelineApp(messages){
        return { 
        restrict: 'E',  
        templateUrl: 'js/directives/timeline-app.html', 
        link: function(scope,element,attrs){
          messages.success(function(data){
            scope.feeds= data;
          });
          scope.parity=function(test){
            if (test % 2 === 0){
              return "timeline";
            }
            else{
              return "timeline-inverted";
            }
          };
      
        }
      }; 
    }
})();