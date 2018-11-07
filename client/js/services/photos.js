angular.module('photoService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Photos', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/photo');
			}
		}
	}]);