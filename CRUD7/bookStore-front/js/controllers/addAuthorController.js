

app.controller("addAuthorController", ["$scope", "author", "$location", function ($scope, author, $location) {
    $scope.newAuthorData = {};

    $scope.authorData = author.index(function (data) {
    });

    $scope.formTitle = "Please enter author credentials";
    $scope.saveBtnText = "Add to database";

    $scope.canDelete = true;


    $scope.goTos = function (path) {
        $location.url(path);
    }

    $scope.save = function () {

        if (!$scope.newAuthorData.name) {
            $scope.alerts.push({ type: 'danger', msg: 'Enter all the credentials, fker.' })

            $scope.newAuthorData = {};
        }
        else {
            //console.log("newAuthorData: ", $scope.newAuthorData);
            //console.log("Created new author", $scope.newAuthorData);
            author.create($scope.newAuthorData);
            $scope.newAuthorData = {};
        }
    }

    $scope.delete = function () {
        author.destroy({ id: idToDelete });
        $scope.newAuthorData = {};
    };




    $scope.authorSelect = function (authIndex, id) {
        //$scope.newBookData.authors.push($scope.bookData.authorNames);
        //$scope.newBookData.genres.push($scope.bookData.genreNames);

        $scope.newAuthorData.name = $scope.authorData[authIndex].name;
        //console.log("selectedAuthor: ", $scope.newAuthorData.author);

        for (var i in $scope.authorData) {
            var authorId = $scope.authorData[i].Id;

            if (authorId == id) {

                //console.log("User selected things: ", $scope.newAuthorData);

                idToDelete = $scope.authorData[i].Id;
            }
        }
    }
}]);