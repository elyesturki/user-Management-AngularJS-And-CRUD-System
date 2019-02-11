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
        addUser : function(newUser) {
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
        },
        deleteUser : function(ID) {
           return $http.delete(urlAPI+ID, {
              }).then(function(res) {
                    return res;
                })
                .catch(function(err) {
                    return err;
                })
        }
    };

  return Users

}]);