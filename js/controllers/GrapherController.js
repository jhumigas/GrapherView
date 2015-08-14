app.controller('GrapherController',['$scope','$timeout' ,function ($scope,$timeout) {
  $scope.portofolio=[
  {
    link: '#portfolioModal1',
    imgsrc: 'img/portfolio/cabin.png',
    template: 'js/views/a.html',
    visibility: false
  },
  {
    link: '#portfolioModal3',
    imgsrc: 'img/portfolio/circus.png',
    template: 'js/views/c.html',
    visibility: false
  },
  {
    link: '#portfolioModal2',
    imgsrc: 'img/portfolio/cake.png',
    template: 'js/views/b.html',
    visibility: false
  }
  ];
  $scope.date = new Date();
  var initialisation = function(){
    for(var item in $scope.portofolio){
      $scope.portofolio[item].visibility = true;
    }
  }
  $timeout(initialisation,500)
    },

]);