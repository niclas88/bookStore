app.controller("genreController", ["$scope", "genre", "book", function($scope, genre, book){
	
    $scope.genreData = genre.index(function (data) {
    });
    $scope.bookData = book.index(function (data) {
    });
    kek = function () {
        console.log(JSON.stringify($scope.selectedBook), null, '\t');
    }
    //Get the id of the book being clicked	
    $scope.getBookId = function (bookId, bookIndex) {
        $scope.bookId = bookId;
        $scope.selectedBook = $scope.bookData[bookIndex];
    }
    $scope.readMore = function () {
        $scope.more = !$scope.more;
        $scope.summary = !$scope.summary;
    }

    $scope.editBook = function () {
        $scope.showDetailWindow = !$scope.showDetalWindow;
        $scope.editBookView = !$scope.editBookView;
        $scope.showEdit = !$scope.showEdit;
    }
    $scope.saveData = function () {
        $scope.showDetailWindow = !$scope.showDetailWindow;
        $scope.editBookView = !$scope.editBookView;
        $scope.showEdit = !$scope.showEdit;
    }

}]);



