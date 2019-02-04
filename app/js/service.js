app.factory('Users', ['$http', function usersService($http) {
    
    var urlAPI = "https://jsonplaceholder.typicode.com/users/";

    var Users = {
        getUsers : function() {
        return $http.get(urlAPI)
            .then(function(res) {
                return res.data;
            })
            .catch(function(res) {
                return res.data;
            });
        }
    };

  return Users

}]);