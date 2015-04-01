app.controller("bookController", ["$scope", "book", "author", "genre", "image", "rating", function ($scope, book, author, genre, image, rating) {
    console.log("bookController is working");
	
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

	var editBook;
	var editDescription;	
	//Get the id of the book being clicked	
	$scope.getBookId = function(bookId, bookIndex){
	    $scope.bookId = bookId;
	    $scope.selectedBook = $scope.bookData[bookIndex];
		console.log(bookId);
	}

	$scope.readMore = function(){
		$scope.more = !$scope.more;
		$scope.summary = !$scope.summary;
	}

	$scope.editBook = function(){
		$scope.showDetailWindow = !$scope.showDetalWindow;
		$scope.editBookView = !$scope.editBookView;
		$scope.showEdit = !$scope.showEdit;
	}
	$scope.saveData = function(){
		$scope.showDetailWindow = !$scope.showDetailWindow;
		$scope.editBookView = !$scope.editBookView;
		$scope.showEdit = !$scope.showEdit;
	}

	// $scope.books = Book.index();
	/*
	$scope.getBookRating = function(bookRating){
		$scope.bookRating = bookRating;
		console.log(bookRating);
	}
	*/
}]);

//$http
//	.get("data/bookData.json")
//	.success(function(data){
//		console.log("Got dummydata", data);
//		data.forEach(function(book){
//			book.all = book.author + " " + book.genre + " " + book.title;
//		});
//		$scope.bookData = data;
//});
