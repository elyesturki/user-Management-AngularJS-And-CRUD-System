app.controller('usersCtrl', ['$scope', 'Users', function($scope, Users) {

  $scope.users = Users.getUsers();

}]);