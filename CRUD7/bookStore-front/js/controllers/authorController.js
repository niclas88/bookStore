app.controller("authorController", ["$scope", "author", "book", function($scope, author, book){

    $scope.authorData = author.index(function (data) {
        console.log($scope.authorData, "authorBooks");
    });
    $scope.bookData = book.index(function (data) {
        console.log($scope.bookData, "BOOKS");
    });

    //Get the id of the book being clicked	
    $scope.getBookId = function (bookId) {
        $scope.bookId = bookId;
        console.log(bookId);
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

//Var anropas denna controllern? Eller är AuthornView länkat istället till bookController?