app.directive('fxbetaApp',['$timeout',
    function($timeout){
    	return{
            scope:{},
    		templateUrl:'js/directives/fxbeta-app.html',
            link: function(scope,element,attrs){
                $timeout(function(){
                    scope.optionsChart = {
                        scaleShowVerticalLines: false,
                        scaleShowHorizontalLines: false,
                        scaleShowGridLines : false,
                        showTooltips: true,
                        pointDot : false,
                        pointDotRadius : 2,
                        pointHitDetectionRadius : 1,
                     };
                    scope.equation = ["y"];
                    scope.variable ="y";
                    scope.fx= ["fy"];
                    scope.xmin= 0;
                    scope.xmax= 100;
                    scope.precision= 10;
                    scope.javafx = ['abs','acos','asin','atan','cos','sin','tan','exp','log','random','sqrt'];
                    scope.labels = ['0', '1', '2', '3', '4', '5', '6','7','8','9','10'];
                    scope.data = [[0, 10, 20, 30, 40, 50, 60,70,80,90,100]];
                    scope.colours = [{
                         // grey
                    fillColor: 'rgba(148,159,177,0.2)',
                    strokeColor: 'rgba(148,159,177,1)',
                    pointColor: 'rgba(148,159,177,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(148,159,177,0.8)'
                    }];
                    scope.updateFunction = function(){
                      var i;
                      var j;
                      scope.fx=scope.equation;
                      for(j=0;j<scope.fx.length;j++){
                          for(i=0;i<scope.javafx.length;i++){      
                      scope.fx[j]=scope.fx[j].replace(new RegExp(String(scope.javafx[i]),'g'),'Math.'+String(scope.javafx[i]));
                      };
                      };
                      
                    };
                    scope.updateLabels = function(){
                      scope.labels = [];
                      var i;
                      for(i=0;i<scope.precision;i++){ 
                        var str = i*(scope.xmax-scope.xmin)/scope.precision;
                        str+= parseInt(scope.xmin);
                        scope.labels.push(str.toString().substr(0,5));
                      }
                    };
                    scope.updateData =function(){
                        var i;
                        for (i=0;i<scope.fx.length;i++){
                            scope.data[i]=[];
                            var j;
                          for(j=0;j<scope.labels.length;j++){
                          var res = scope.fx[i].replace(new RegExp(scope.variable,'g'),scope.labels[j]);
                          scope.data[i].push(eval(res));
                        };
                        };
                        
                    };
                    scope.add = function(){
                        scope.equation.push("y");
                        scope.data.push([]);
                        scope.updateData();

                    };
                    scope.clearEquation=function(){
                        var i;
                        for(i=0;i<scope.equation.length;i++){
                            scope.equation[i]=scope.equation[i].replace(/Math./g,'');
                        };
                    };
                    scope.remove=function(index){
                        scope.equation.splice(index,1);
                        scope.data.splice(index,1);
                    };
                    scope.isCollapsed= true;
                    scope.isCollapsedG= true;
                    scope.update=function(){ 
                      scope.isCollapsedG= false;  
                      scope.updateFunction();
                      scope.updateLabels();
                      scope.updateData();
                      scope.clearEquation();
                    };
                },2500);
            
        			
          }
    		
    	}
}
])