app.controller('GrapherController',['$scope' ,function ($scope) {
  $scope.portofolio=[
  {
    link: '#portfolioModal1',
    imgsrc: 'img/portfolio/cabin.png'
  },
  {
    link: '#portfolioModal2',
    imgsrc: 'img/portfolio/cake.png'
  },
  {
    link: '#portfolioModal3',
    imgsrc: 'img/portfolio/circus.png'
  },
  ];
  $scope.date = new Date();
    },
]);