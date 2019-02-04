app.controller('usersCtrl', ['$scope', 'Users', function($scope, Users) {

  $scope.users = Users.getUsers()
    .then(function(result) {
      if (result) {
        $scope.users = result
      }
    });

}]);