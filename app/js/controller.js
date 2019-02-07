app.controller('usersCtrl', ['$scope', 'Users', function($scope, Users) {

  $scope.displayList = false;

  $scope.users = Users.getUsers()
    .then(function(result) {
      if (result.length) {
        $scope.displayList = true;
        $scope.users = result
      } else {
        $scope.displayList = false;
      }
    });

}]);