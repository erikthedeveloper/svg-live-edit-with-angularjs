var svgApp = angular.module('svgApp', []);

svgApp.factory('Shapes', function() {

  shapes = {};

  lines = [];
  shapes.line1 = {
      points       :"0,300 100,50, 300,125 600,10" ,
      stroke_width : 8,
      stroke       : "#FFA500"
  };

  return shapes;
});


function SvgCtrl($scope, Shapes) {

    $scope.shapesInit = function() {

      $scope.line1 = {
        points       :"0,300 100,50, 300,125 600,10 900,180 1110,60" ,
        stroke_width : 8,
        stroke       : "#FFA500"
      };

      $scope.rect   = {
        width : 250,
        height : 200,
        fill : "#C2C2C2",
        stroke : "#000000",
        stroke_width : 3,
        x : 700,
        y : 75,
        border_radius : 15
      };

      $scope.line2   = {
        points       :"0,300 100,150, 300,175 600,150 900,150 1110,0" ,
        stroke_width : 8,
        stroke       : "#008000"
      };

    };

    $scope.shapesInit();

}