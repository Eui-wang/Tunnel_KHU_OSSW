var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session')

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var users = new Array();
users[0] = {
	"userId" : 1,
	"name" : "Oh",
	"password" : "abc",
	"isAdmin" : true
}
users[1] = {
	"userId" : 1,
	"name" : "Jung",
	"password" : "abc",
	"isAdmin" : true
}
users[2] = {
	"userId" : 2,
	"name" : "Go",
	"password" : "abc",
	"isAdmin" : true
}

app.put('/login', function (req, res) {
	var count = 0;
	var Found = false;

	while(count < users.length) {
		if (req.body.userId == users[count].userId
			&& req.body.password == users[count].password) {
			req.session.userId = users[count].userId;
			req.session.isAdmin = users[count].isAdmin;
			Found = true;
			break;
		}
		else {
			count++;
		}
	}
	if(Found) {
		res.send("Login");
	}
	else {
		res.send("Failed");
	}
});

app.put('/logout', function (req, res) {
	if (req.session.userId == req.body.userId) {
		req.session.userId = null;
		req.session.isAdmin = false;
		res.send("LogOut");
	}
	else {
		res.send("Failed");
	}
});

var auth = function (req, res, next) {
	if (req.session.userId != null
		&& req.session.isAdmin == true)
		next();
	else
		res.send("Error");
};

app.get('/users/:userId', auth,function (req, res) {
	var inputId = req.params.userId;
	var count = 0;
	var Found = false;
	while(count < users.length) {
		if(inputId == users[count].userId){
			Found = true;
			res.send(users[count]);
			break;
		}
		else {
			count++;
		}
	}
	
	if (!Found) {
		res.send("Not Found");
	}
});

app.put('/users',auth,function(req, res){
	var inputId = req.body.userId;
	var count = 0;
	var Found = false;

	while (count < users.length) {
		if (inputId == users[count].userId) {
			Found = true;
			users[count] = req.body;
			res.send(users[count]);
			break;
		}
		else {
			count++;
		}
	}

	if(!Found) {
		res.send("Not Found");
	}

});

app.post('/users',auth,function(req, res){
	var inputData = {
		"userId" : req.body.userId,
		"name" : req.body.name,
		"password" : req.body.password,
		"isAdmin" : req.body.isAdmin
	}
	users.push(inputData);
	res.send(inputData);
});

app.delete('/users/:userId',auth,function(req, res){
	var inputId = req.params.userId;
	var count = 0;
	var Found = false;
	var removed;

	while (count < users.length) {
		if (inputId == users[count].userId) {
			Found = true;
			removed = users.splice(count,1);
			console.log(users.length);
			res.send(removed);
			break;
		}
		else {
			count++;
		}
	}

	if (!Found) {
		res.send("Not Found");
	}
});

var server = app.listen(80);