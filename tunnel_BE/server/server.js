const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();
const indexRouter = require('./routes/index.js');
const userRouter = require('./routes/login.js');
const registerRouter = require('./routes/regiser.js');

const app = express();
app.set('port', process.env.PORT || 3000);
const port = app.get('port'); 

//미들웨어 설정
app.use(morgan('dev'));
app.use(express.json()); //json형식으로 데이터 전달
app.use(express.urlencoded({extende: false})); // url형식으로 형식으로 데이터 전달
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
	secret: 'keyboard cat' ,//process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure:false,
    },
    name: 'session-cookie',
}));

//라우팅
app.use('/',indexRouter);
app.use('/login',userRouter);
app.use('/register',registerRouter);


//에러처리 미들웨어
//존재하지 않는 경로가 들어오면 오류 응답
app.use((req,res,next)=>{
    console.log("유저가 존재하지 않은 경로 접근");
    res.status(404).send("NOT FOUND");

});

//포트를 연다.
app.listen(port, ()=>{
    console.log(port,"번 포트로 대기중");
});

//라우팅

/*
//루트페이지
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '/fe/index.html'));
});
//로그인페이지
app.get('/login', (req,res)=>{
    res.send("로그인페이지");
});

app.get('/register', (req,res)=>{
    res.send("회원가입 페이지");
});

*/





/* 물어볼 부분
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
*/

/*
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
*/

//var server = app.listen(80);