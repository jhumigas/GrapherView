(function(){
  'use strict';
  
  angular
    .module('GrapherApp')
    .controller('GrapherController', GrapherController);
    
    function GrapherController($scope) {
      
      /*jshint validthis:true */
        var grapher = this;
        grapher.portofolio=[
            {
              link: '#portfolioModal1',
              imgsrc: 'img/portfolio/cabin.png',
              template: 'js/views/a.html',
              visibility: true
            },
            {
              link: '#portfolioModal3',
              imgsrc: 'img/portfolio/circus.png',
              template: 'js/views/c.html',
              visibility: true
            }/*,
            {
              link: '#portfolioModal2',
              imgsrc: 'img/portfolio/cake.png',
              template: 'js/views/b.html',
              visibility: true
            }*/
            ];
            grapher.date = new Date();
            /*var initialisation = function(){
              for(var item in $scope.portofolio){
                $scope.portofolio[item].visibility = true;
              }
            };
            $timeout(initialisation,500);*/
  
    }

})();