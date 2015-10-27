app.directive('timelineApp',['messages',function(messages) { 
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
}]);