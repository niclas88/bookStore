app.controller("addController", ["$scope", "book", "author", "genre", "$location", function ($scope, book, author, genre, $location) {
    console.log("addController is working");
    $scope.newBookData = {};

    $scope.formTitle = "Please enter book credentials";
    $scope.saveBtnText = "Add to database";
    $scope.canDelete = true;

    $scope.bookData = book.index(function (data) {
        console.log($scope.bookData, "BOOKS");
    });
    $scope.authorData = author.index(function (data) {
        console.log($scope.authorData, "Authors");
    });
    $scope.genreData = genre.index(function (data) {
        console.log($scope.genreData, "Genres");
    });



    $scope.goTos = function (path) {
        $location.url(path);
    }

    $scope.save = function () {
        console.log("newBookData: ", $scope.newBookData);

        //$http.post("someurl", $scope.newBookData);

        if (!$scope.newBookData.author || !$scope.newBookData.title || !$scope.newBookData.genre || !$scope.newBookData.isbn || !$scope.newBookData.published || !$scope.newBookData.description) {
            $scope.alerts.push({ type: 'danger', msg: 'Enter all the credentials, fker.' })

            $scope.newBookData = {};
            console.log("Some fields weren't filled in. newBookData = ", $scope.newBookData)
        }
        else {
            console.log("newBookData: ", $scope.newBookData);
            console.log("Created new author", $scope.newBookData);
            book.create($scope.newBookData);
        }
    };



    $scope.authorSelect = function (authIndex) {
        console.log("User selected author: ", $scope.authorData[authIndex].name);
        $scope.newBookData.author = $scope.authorData[authIndex].name;
        console.log("selectedAuthor: ", $scope.newBookData.author);
    }

    $scope.$watch("selectedAuthor", function (newVal, oldVal) {
        console.log("selectedAuthor changed from ", oldVal, " to ", newVal);
    })


    $scope.genreSelect = function (genreIndex) {
        console.log("User selected genre: ", $scope.genreData[genreIndex].name);
        $scope.newBookData.genre = $scope.genreData[genreIndex].name;
        console.log("selectedGenre: ", $scope.newBookData.genre);
    }

    $scope.$watch("selectedGenre", function (newVal, oldVal) {
        console.log("selectedGenre changed from ", oldVal, " to ", newVal);
    })


    $scope.titleSelect = function (titleIndex, id) {
        console.log("User selected title: ", $scope.bookData[titleIndex].title);
        $scope.newBookData.title = $scope.bookData[titleIndex].title;
        console.log("selectedTitle: ", $scope.newBookData.title);

        for (var i in $scope.bookData) {
           var bookId = $scope.bookData[i].Id;
           var bookAuthor = $scope.bookData[i].authorNames;
           var bookGenre = $scope.bookData[i].genreNames;
           var bookIsbn = $scope.bookData[i].isbn;
           var bookYear = $scope.bookData[i].year;
           var bookDescription = $scope.bookData[i].description;

            for (var j in bookAuthor) {
                var author = bookAuthor[j].name;                
            }
            for (var k in bookGenre) {
                var genre = bookGenre[k].name
            }
            if (bookId == id) {
                console.log(author, genre, bookIsbn, bookYear, bookDescription);
                $scope.newBookData.author = author;
                $scope.newBookData.genre = genre;
                $scope.newBookData.published = bookYear;
                $scope.newBookData.isbn = bookIsbn;
                $scope.newBookData.description = bookDescription;
               
                idToDelete = $scope.bookData[i].Id;
                console.log(idToDelete);
            }            
        }
    }
    $scope.delete = function () {
        console.log(idToDelete);
        book.destroy({ id: idToDelete });
    };

    $scope.$watch("selectedTitle", function (newVal, oldVal) {
        console.log("selectedTitle changed from ", oldVal, " to ", newVal);
    })


    $scope.alerts = [];


    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };



}]);

