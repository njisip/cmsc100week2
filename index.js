var express = require('express');
var app = express();

app.use(require('body-parser')());
app.use(require('method-override')());
app.use(require(__dirname + '/config/router')(express.Router()));
app.use(express.static(__dirname + '/public'));

//
// app.get('/', function(req, res){
// 	res.send('Hello World!');
// });

// app.get('/students', function(req, res){
// 	res.send('NJ');
// });

var server = app.listen(5000, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at htpp://%s:%s', host, port);
});