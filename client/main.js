var scotchTodo = angular.module('scotchTodo', []);

function mainController($scope, $http) {
    $scope.formData = {};

    // Get all photos from the server.
    $http.get('/photos')
        .success(function(data) {
            $scope.fotos = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.getMorePhotos= function(){
         $http.get('/photos/')
             .success(function(data) {
            $scope.fotos = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    }

    
}

