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

        if (!$scope.newBookData.authors || !$scope.newBookData.title || !$scope.newBookData.genre || !$scope.newBookData.isbn || !$scope.newBookData.year || !$scope.newBookData.description) {
            $scope.alerts.push({ type: 'danger', msg: 'Enter all the credentials, fker.' })

            $scope.newBookData = {};
            console.log("Some fields weren't filled in. newBookData = ", $scope.newBookData)
        }
        else {
 
            //THomas kod f�r att sparade authorId i authorIds f�r att koppla f�rfattare till bokobjekt
            var toSave = {authorIds:[]};
            for (var i in $scope.newBookData) {
                if (i == "authors" || i == "id") { continue;}
                toSave[i] = $scope.newBookData[i];
            }
            var as = $scope.newBookData.authors;
            for (var i = 0; i < as.length; i++) {
                toSave.authorIds.push(as[i].Id);
            }
            console.log("The backend friendly book", toSave);
            book.create(toSave);
        }
    };

    // Skapa samma f�r genre etc...
    var authorId;
    $scope.newBookData.authors = [];
    $scope.newBookDataPresentation = {}

    $scope.authorSelect = function (authIndex, id) {
        //console.log("User selected author: ", $scope.authorData[authIndex].name);
        $scope.newBookData.authors.push($scope.authorData[authIndex]);
        //console.log("selectedAuthor: ", $scope.newBookData.authors);
        $scope.newBookDataPresentation.authors = "";
        for (var i = 0; i < $scope.newBookData.authors.length; i++) {
            i > 0 && ($scope.newBookDataPresentation.authors += ", ");
            $scope.newBookDataPresentation.authors += $scope.newBookData.authors[i].name;
        }
        

        /*for (var i in $scope.authorData) {
            authorId = $scope.authorData[i].Id;

            if (authorId == id) {
                console.log("if-sats");
                console.log(authorId);
            }
        }*/
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

    //This happens when you click Existing Title
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
                console.log(bookAuthor, genre, bookIsbn, bookYear, bookDescription);
                $scope.newBookDataPresentation.authors = author;
                $scope.newBookData.genre = genre;
                $scope.newBookData.year = bookYear;
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

