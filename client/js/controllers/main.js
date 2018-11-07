angular.module('photoController', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http','Photos', function($scope, $http, Photos) {
		$scope.formData = {};
		$scope.loading = true;
		$scope.index = 1;
		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		Photos.get()
			.success(function(data) {
				$scope.photos = data;
				$scope.loading = false;
			});

	}]);

