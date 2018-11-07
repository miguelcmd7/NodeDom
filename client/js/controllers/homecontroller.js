angular.module('HomestateController', [])

	// inject the Todo service factory into our controller
	.controller('homeController', ['$scope','$http','Homestate', function($scope, $http, Homestate) {
		$scope.formData = {};
		$scope.loading = true;
		$scope.index = 1;
		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		Homestate.get()
			.success(function(data) {
				$scope.state = data;
				$scope.loading = false;
			})
			


	}]);