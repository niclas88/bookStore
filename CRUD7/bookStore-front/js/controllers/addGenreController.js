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

            $scope.ńewGenreData = {};



        }
    }

    $scope.delete = function () {
        console.log("Hej nu ska jag ta bort: ", idToDelete)
        genre.destroy({ id: idToDelete });
        $scope.newGenreData = {};
    };



     $scope.edit = function () {

         genre.update({
             id: idToDelete,
             name: $scope.newGenreData.name,
             description: $scope.newGenreData.description
         });

        $scope.newGenreData = {};
        
    }


    $scope.genreSelect = function (genreIndex, id) {
        //$scope.newBookData.authors.push($scope.bookData.authorNames);
        //$scope.newBookData.genres.push($scope.bookData.genreNames);

        $scope.newGenreData.name = $scope.genreData[genreIndex].name;
        console.log("selectedGenre: ", $scope.newGenreData.name);




        for (var i in $scope.genreData) {
            var genreId = $scope.genreData[i].Id;
            var genreDescription = $scope.genreData[i].description

            
            if (genreId == id) {
                $scope.newGenreData.description = genreDescription;
                console.log("User selected things: ", $scope.newGenreData);

                idToDelete = $scope.genreData[i].Id;
                console.log(idToDelete);


            }
        }
    }
    
}]);




