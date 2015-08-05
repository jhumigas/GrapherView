app.controller('GrapherController',['$scope' ,function ($scope) {
  $scope.portofolio=[
  {
    link: '#portfolioModal1',
    imgsrc: 'img/portfolio/cabin.png',
    template: 'a.html'
  },
  {
    link: '#portfolioModal3',
    imgsrc: 'img/portfolio/circus.png',
    template: 'c.html'
  },
  {
    link: '#portfolioModal2',
    imgsrc: 'img/portfolio/cake.png',
    template: 'b.html'
  }
  ];
  $scope.date = new Date();
    },
]);