//Change this code to display the average rating from database.
//Equation is totalRating/voteCount = average
//Needs more modifications to this code to make it fully functional.
  app.controller('showRateCtrl', ['$scope', function ($scope) {
      $scope.ratings = [{
          current: 0,
          max: 5
      }];  //Calculate and display average rating. Dunno where to insert this, yet. ::: Hugo said this was the spot.
  $scope.average = function(RatingData){ 
    var totalRating = 0; for(var i = 0; i < voteCount; i++;){
    totalRating += parseInt(totalRating[i]); 

    var avg = totalRating/voteCount;

    $scope.ratings[0].current = avg;

    return avg; 
};
    }]);
  app.directive('dirShowRating', function () {
    return {
      restrict: 'A',
      template: '<ul class="rating2">' +
                  '<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' +
                    '\u2605' +
                  '</li>' +
                '</ul>',
      scope: {
        ratingValue: '=',
        max: '=',
      },
      link: function (scope, elem, attrs) {
            scope.stars = [];
            for (var i = 0; i < scope.max; i++) {
                scope.stars.push({
                    filled: i < scope.ratingValue
                });
            }
        }
    }
});

