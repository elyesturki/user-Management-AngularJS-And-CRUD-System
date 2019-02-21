app.controller('usersCtrl', ['$scope', 'Users', '$timeout', function($scope, Users, $timeout) {

  $scope.displayList = false;
  $scope.users = [];
  $scope.showMessageAddUser = false;
  $scope.errorMessageAddUser = true;

  Users.getUsers()
    .then(function(result) {
      if (result.length) {
        $scope.displayList = true;
        $scope.users = result
      } else {
        $scope.displayList = false;
      }
    });

  $scope.addUser = function () {
    if ($scope.newUser.name && $scope.newUser.email && $scope.newUser.phone) {
      Users.addUser($scope.newUser)
      .then(function (resp) {
        if (resp.status !== 404) {
          $scope.users.push(resp.data);
          $scope.errorMessageAddUser = false;
          $scope.showMessageAddUser = true;
          $scope.reset();
        } else {
          $scope.errorMessageAddUser = true;
          $scope.showMessageAddUser = true;
        }
      }).catch(function (error) {
        $scope.errorMessageAddUser = true;
        $scope.showMessageAddUser = true;
        console.log("Error: ", error.message);
      })
    } else {
      $scope.errorMessageAddUser = true;
      $scope.showMessageAddUser = true;
    }
  };

  $scope.deleteUser = function (ID) {
    Users.deleteUser(ID)
      .then(function (resp) {
        if (resp.status !== 404) {
            $scope.users.splice($scope.users.findIndex(x => x.id === ID), 1 );
            //for old browsers
            // for (i=0; i<$scope.users.length; i++) {
            //   if (ID === $scope.users[i].id) {
            //     $scope.users.splice(i, 1 );
            //     return;
            //   }
            // }
        }
      }).catch(function (error) {
        console.log("CTR Error: ", error.message);
      })
  }

  $scope.reset = function () {
    $scope.newUser.name = '';
    $scope.newUser.email = '';
    $scope.newUser.phone = '';
    $timeout(function() {
      $scope.showMessageAddUser = false;
      $scope.errorMessageAddUser = true;
    }, 3000);
  }


}]);