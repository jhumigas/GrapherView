app.directive('timelineApp',['messages',function(messages) { 
  return { 
    restrict: 'E',  
    templateUrl: 'js/directives/timeline-app.html', 
    link: function(scope,element,attrs){
      messages.success(function(data){
        scope.feeds= data;
      });
   
    }
  }; 
}]);