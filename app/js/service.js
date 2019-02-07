app.service('Users', ['$http', function Users($http) {
    
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
        },
        addUsers : function(newUser) {
           return $http.post(urlAPI, {
                name : newUser.name,
                email :  newUser.email,
                phone  : newUser.phone
              }).then(function(res) {
                    return res;
                })
                .catch(function(err) {
                    console.log("err: ",err)
                    return err;
                })
        }
    };

  return Users

}]);