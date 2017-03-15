var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

//Port
var port = process.env.PORT || 3000;

//Morgan Middleware
app.use(morgan('dev'));

//BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//Static Folder (Frontend Middleware)
app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
    console.log('Server running at port ' + port);
});
