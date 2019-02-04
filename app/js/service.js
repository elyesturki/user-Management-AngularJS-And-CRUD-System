app.factory('Users', function() {
    
    var data =  [
          {
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
          },
          {
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
          },
          {
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net"
           }
    ];

  /*function getUsers() {
    return data;
  }*/

  var Users = {
    getUsers: function getUsers () {
        return data;
    }
  }

  return Users

});