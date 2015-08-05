app.directive('fxApp',['$timeout',
    function($timeout){
    	return{
            scope:{},
    		templateUrl:'js/directives/fx-app.html',
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
                    scope.equation = "y";
                    scope.variable ="y";
                    scope.fx= "fy";
                    scope.xmin= 0;
                    scope.xmax= 100;
                    scope.precision= 10;
                    scope.javafx = ['abs','acos','asin','atan','cos','sin','tan','exp','log','random','sqrt'];
                    scope.labels = ['0', '1', '2', '3', '4', '5', '6','7','8','9','10'];
                    scope.data = [[0, 10, 20, 30, 40, 50, 60,50,40,30,20]];
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
                      scope.fx= scope.equation;
                      var i;
                      for(i=0;i<scope.javafx.length;i++){
                      scope.fx=scope.fx.replace(new RegExp(String(scope.javafx[i]),'g'),'Math.'+String(scope.javafx[i]));
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
                      scope.data[0]=[];
                        var j;
                        for(j=0;j<scope.labels.length;j++){
                          var res = scope.fx.replace(new RegExp(scope.variable,'g'),scope.labels[j]);
                          scope.data[0].push(eval(res));
                        }
                    };
                    scope.update=function(){
                      scope.updateFunction();
                      scope.updateLabels();
                      scope.updateData();
                    };
                },50);
            
        			
          }
    		
    	}
}
])