//Somewhere in the controller THAT DISPLAYS FROM THE DATABASE
// we need to add the possibility to count 0.1 per step on the star.


//--We need to duplicate the entire code and make modifications so that it can display the average rating
//from the database. It will only need the display function and not the click function.--
//Duplication made, but still needs some more modifications.


//!!!!!Also remember that the $window and saverRatingToServer function is later changed to actually
// save total rating as well as add votecounter to the database.
// Maybe use the $watch to react and save the rating to the database?
angular.module('Rater', [])
  .controller('rateCtrl', function($scope, $window, $http) {
    $scope.rating = 5;
    $scope.saveRatingToServer = function(rating) {
      $window.alert('Rating selected - ' + rating);
    };
    $scope.$watch("rating", function(newVal, oldVal) {
      if (newVal === undefined) { return; }
      //The following 2 lines are pretty much the same thing.
      //It shows in the console log what the rating has been changed to.
      console.log("rating changed to: ", newVal);
      console.log("rating changed to: ", $scope.rating);

    })
  })
  .directive('dirRating', function () {
    return {
      restrict: 'A',
      template: '<ul class="rating">' +
                  '<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' +
                    '\u2605' +
                  '</li>' +
                '</ul>',
      scope: {
        ratingValue: '=',
        max: '=',
        readonly: '@',
        onRatingSelected: '&'
      },
      link: function (scope, elem, attrs) {

        var updateStars = function() {
          scope.stars = [];
          for (var  i = 0; i < scope.max; i++) {
            scope.stars.push({filled: i < scope.ratingValue});
          }
        };

        scope.toggle = function(index) {
          if (scope.readonly && scope.readonly === 'true') {
            return;
          }

          scope.ratingValue = index + 1;
          scope.onRatingSelected({rating: index + 1});
        };

        scope.$watch('ratingValue', function(newVal, oldVal) {
          if (newVal || newVal === 0) {
            updateStars();
          }
        });
      }
    }
  });




//Add code for calculating rating from the rating system here







// angular.module('ui.bootstrap.demo').controller('RatingDemoCtrl', function ($scope) {
//   $scope.rate = 7;
//   $scope.max = 10;
//   $scope.isReadonly = false;

//   $scope.hoveringOver = function(value) {
//     $scope.overStar = value;
//     $scope.percent = 100 * (value / $scope.max);
//   };

//   $scope.ratingStates = [
//     {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
//     {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
//     {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
//     {stateOn: 'glyphicon-heart'},
//     {stateOff: 'glyphicon-off'}
//   ];
// });