app.controller("bookController", ["$scope", "book", "author", "genre", "image", "rating", function ($scope, book, author, genre, image, rating) {
	
    $scope.bookData = book.index(function (data) {
    });
    $scope.authorData = author.index(function (data) {
    });
    $scope.genreData = genre.index(function (data) {
    });
    $scope.imageData = image.index(function (data) {
    });
    $scope.ratingData = rating.index(function (data) {
    });

    kek = function () {
        console.log(JSON.stringify($scope.selectedBook), null, '\t');
    }

	//Get the id of the book being clicked	
	$scope.getBookId = function(bookId, bookIndex){
	    $scope.bookId = bookId;
	    $scope.selectedBook = $scope.bookData[bookIndex];
	    idToDelete = bookId;
		//console.log(bookId);
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

