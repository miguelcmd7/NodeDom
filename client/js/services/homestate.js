angular.module('homestateService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Homestate', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/homestate');
			}
		}
	}]);