app.controller("bookController", ["$scope", "book", "author", "genre", "image", "rating", function ($scope, book, author, genre, image, rating) {
	
    $scope.bookData = book.index(function (data) {
        console.log($scope.bookData,"BOOKS");
    });
    $scope.authorData = author.index(function (data) {
        console.log($scope.authorData, "Authors");
    });
    $scope.genreData = genre.index(function (data) {
        console.log($scope.genreData, "Genres");
    });
    $scope.imageData = image.index(function (data) {
        console.log($scope.imageData, "Images");
    });
    $scope.ratingData = rating.index(function (data) {
        console.log($scope.ratingData, "Rating");
    });
    //for (var i in $scope.imageData.Id) {
    //    var myId = $scope.imageData.Id[i];
    //    console.log(myId);
    //}

    kek = function () {
        console.log(JSON.stringify($scope.selectedBook), null, '\t');
    }

	//var idToDelete;
	//Get the id of the book being clicked	
	$scope.getBookId = function(bookId, bookIndex){
	    $scope.bookId = bookId;
	    $scope.selectedBook = $scope.bookData[bookIndex];
	    idToDelete = bookId;
		console.log(bookId);
	}

	$scope.readMore = function(){
		$scope.more = !$scope.more;
		$scope.summary = !$scope.summary;
	}

	$scope.editBook = function(){
		//$scope.showDetailWindow = !$scope.showDetalWindow;
		//$scope.editBookView = !$scope.editBookView;
		//$scope.showEdit = !$scope.showEdit;
	}
}]);

