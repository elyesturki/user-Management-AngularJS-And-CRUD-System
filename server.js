//npm install connect serve-static
//node serve.js

var connect = require('connect');
var serveStatic = require('serve-static');
var __dirname = 'app/'
connect().use(serveStatic(__dirname)).listen(3000, function(){
    console.log('Server running on 3000...');
});
