app.controller("addGenreController", ["$scope", "genre", "$location", function ($scope, genre, $location) {
    console.log("addGenreController is working");
    $scope.newGenreData = {};

    $scope.genreData = genre.index(function (data) {
        console.log($scope.genreData, "Genres");
    });

    $scope.formTitle = "Please enter genre credentials";
    $scope.saveBtnText = "Add to database";

    $scope.canDelete = true;

    //$http.post("someurl", $scope.newBookData);

    $scope.goTos = function (path) {
        $location.url(path);
    }

    $scope.save = function () {
        console.log("newGenreData: ", $scope.newGenreData);

        //$http.post("someurl", $scope.newBookData);

        if (!$scope.newGenreData.name) {
            $scope.alerts.push({ type: 'danger', msg: 'Enter all the credentials, fker.' })

            $scope.newGenreData = {};
            console.log("Some fields weren't filled in. newGenreData = ", $scope.newGenreData)
        }
        else {
            console.log("newGenreData: ", $scope.newGenreData);
            console.log("Created new genre", $scope.newGenreData);
            genre.create($scope.newGenreData);
        }
    }

    $scope.delete = function () {
        //i do nothing yet....
    };



    $scope.genreSelect = function (genreIndex) {
        console.log("User selected genre: ", $scope.genreData[genreIndex].name);
        $scope.newGenreData.name = $scope.genreData[genreIndex].name;
        console.log("selectedGenre: ", $scope.newGenreData.genre);
    }
    console.log("HEJ", $scope)

    $scope.$watch("selectedGenre", function (newVal, oldVal) {
        console.log("selectedGenre changed from ", oldVal, " to ", newVal);
    })


}]);




