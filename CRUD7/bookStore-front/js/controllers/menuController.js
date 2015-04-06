app.controller("menuController", ["$scope", "$rootScope", "$location", "users", function($scope, $rootScope, $location, users){
    $scope.userData = users.index(function (data) {});

	var loggedIn;
	var loggedInUser;
	var loggedInPass;
	$scope.userNameInput = null;
	$scope.passwordInput = null;
	$scope.goTo = function(path) {
		$location.url(path);
	}

	/*$rootScope.sortBy = "all";
	$rootScope.query = {};
  	$rootScope.filterOptions = ["all", "genre", "author", "title"];*/
	
	$scope.logIn = function (userName, password) {
	    $scope.userNameInput = null;
	    $scope.passwordInput = null;
	    for (var u in $scope.userData) {
	        var name = $scope.userData[u].userName;
	        var pass = $scope.userData[u].password;
	        if (userName == name && password == pass) {
	            loggedInUser = name;
	            loggedInPass = pass;
	        }
	    }
            if (userName == null || password == null) {
	    alert("You need to enter username and password to log in!");
	    }
	        else if (userName == loggedInUser && password == loggedInPass) {
	            loggedIn = true;
	            alertWindow();
	            if (loggedIn) {
	                $rootScope.showAdd = true;
	                $rootScope.hideLogIn = true;
	                $rootScope.showLogOut = true;
	                $rootScope.showEdit = true;
	                $rootScope.showSave = true;
	                $rootScope.showTxtEdit = true;
	            }
	        }
	        else {
                alert("Invalid username or password!")
	        }
	}
	$scope.logOut = function(){
		loggedIn = false;
		if(!loggedIn){
			$rootScope.showAdd = false;
			$rootScope.hideLogIn = false;
			$rootScope.showLogOut = false;
			$rootScope.showEdit = false;
			$rootScope.showSave = false;
			$rootScope.showTxtEdit = false;
			console.log("Logged out")
		};
	}

	var alertWindow = function(){
		var w = window.open('','','width=200,height=200')
			w.document.write('Logged in successfully as: ' + loggedInUser)
			w.focus()
			setTimeout(function() {w.close();}, 1500)
	}
	

}]);