app.controller("addGenreController", ["$scope", "$http", "$location", function ($scope, $http, $location) {
    console.log("addGenreController is working");
    $scope.newGenreData = {};

    $scope.formTitle = "Please enter genre credentials";
    $scope.saveBtnText = "Add to database";

    $scope.canDelete = true;

    //$http.post("someurl", $scope.newBookData);

    $scope.goTos = function (path) {
        $location.url(path);
    }

    $scope.save = function () {
        //i do nothing yet....
        console.log("newGenreData: ", $scope.newGenreData);
    };

    $scope.delete = function () {
        //i do nothing yet....
    };

    $http
		.get("data/bookData.json")
		.success(function (data) {
		    console.log("Got dummydata", data)
		    $scope.genreData = data;
		});


    $scope.genreSelect = function (genreIndex) {
        console.log("SCOPE INSIDE", $scope)
        console.log("User selected genre: ", $scope.genreData[genreIndex].genre);
        $scope.newGenreData.genre = $scope.genreData[genreIndex].genre;
        console.log("selectedGenre: ", $scope.newGenreData.genre);
    }
    console.log("HEJ", $scope)

    $scope.$watch("selectedGenre", function (newVal, oldVal) {
        console.log("selectedGenre changed from ", oldVal, " to ", newVal);
    })




}]);




