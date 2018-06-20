var express = require('express');
var app = express();
var db = require('./db');
var bodyParser = require('body-parser');
var multer = require('multer');
var methodOverride = require("method-override")
var file = multer({ dest: '/uploads/' });
global.__root   = __dirname + '/';
app.set("view engine","ejs");

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/uploads',express.static('uploads'));
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.get('/api', function (req, res) {
  res.status(200).send('API works.');
});

var UserController = require(__root + 'user/controller/UserController');
app.use('/api/user', UserController);

var AuthController = require(__root + 'user/auth/AuthController');
app.use('/api/auth', AuthController);

var UserDetailController = require(__root + 'user/controller/UserDetailController');
app.use('/api/userdetail', UserDetailController);

var BlogController = require(__root + 'user/controller/blogController');
app.use('/api/Blog', BlogController);


var port = process.env.PORT || 4000;

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
