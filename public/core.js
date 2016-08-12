var scotchTodo = angular.module('scotchTodo', []);

function mainController($scope, $http) {
  $scope.formData = {};

  $http.get('/api/todos')
    .success((data) => {
      $scope.todos = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });

    $scope.createTodo = function() {
      $http.post('/api/todos', $scope.formData)
        .success((data) => {
          $scope.formData = {};
          $scope.todos = data;
          console.log(data);
        })
        .error((data) => {
          console.log('Error: ' + error);
        });
    };

    $scope.deleteTodo = function(id) {
      $http.delete('/api/todos/' + id)
        .success((data) => {
          $scope.todos = data;
          console.log(data);
        })
        .error(function(data) {
          console.log('Error: ' + data);
        })
    }
}
