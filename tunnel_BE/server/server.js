// 사용 모듈 import
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const {sequelize}=require('./models/index.js');

dotenv.config();
const indexRouter = require('./routes/index.js');
const loginRouter = require('./routes/login.js');
const registerRouter = require('./routes/register.js');
const mainRouter = require('./routes/main.js');
const logoutRouter = require('./routes/logout.js');
const authRouter = require('./routes/auth.js');
const userRouter = require('./routes/user.js');
const postRouter = require('./routes/post.js');
const commentRouter = require('./routes/comment.js');

const app = express();
app.set('port', process.env.PORT || 3001);
const port = app.get('port'); 

//DB연결
sequelize.sync({force: false})
.then(()=>{
	console.log("DB연결 완료")
})
.catch((err)=>{
	console.log(err);
});

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
app.use('/api/register',registerRouter); // 회원가입 페이지
app.use('/api/login',loginRouter); //로그인 페이지
app.use('/api/main',mainRouter);//메인페이지
app.use('/api/auth',authRouter);//가입여부 확인
app.use('/api/logout',logoutRouter);//로그아웃
app.use('/api/user',userRouter);//유저정보 응답
app.use('/api/post',postRouter);//유저정보 응답
app.use('/api/comment',commentRouter);//유저정보 응답


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