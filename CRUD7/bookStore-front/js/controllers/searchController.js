app.controller("searchController", ["$scope", "book", "$rootScope", "$routeParams", "$location", "author", "genre", function ($scope, book, $rootScope, $routeParams, $location, author, genre) {

    $scope.searchFilterResult = [];

    $scope.filterOptions = ["all", "genre", "author", "title"];
    $scope.sortBy = $scope.filterOptions[0];

    //$scope.authorData = author.index(function (data) {

    //});
    //$scope.genreData = genre.index(function (data) {

    //});

    $scope.bookData = book.index(function (data) {
        console.log("BOOKS - to search from", $scope.bookData);
        // add a new property that mashes all properties
        // into one string in order to make filter = all work
        $scope.bookData.forEach(function (book) {
            book.all = book.title + book.authors + book.genres;
        });
    });

    if ($routeParams) {
        console.log("searchController got $routeParams: ", $routeParams, " now using these as $scope.query...");
        $rootScope.query = $routeParams;
    }

    //$rootScope.$watch("query",function(x){console.log("query",x)});
    $scope.$watch("searchFilterResult", function (newVal, oldVal) {
        console.log("searchFilterResult changed from ", oldVal, " to ", newVal);
    });

    $scope.$watch("sortBy", function (newVal, oldVal) {
        if (!oldVal) { return; }
        var textVal = $rootScope.query[oldVal];
        $rootScope.query[newVal] = textVal;
        console.log("sortBy changed from ", oldVal, " to ", newVal);
    });

    $scope.goSearch = function () {
        console.log("User wants to search with query: ", $rootScope.query);
        console.log("now changing $location to: " + "/search?" + $scope.sortBy + "=" + $rootScope.query[$scope.sortBy]);
        $location.url("/search?" + $scope.sortBy + "=" + $rootScope.query[$scope.sortBy]);
    }
}]);