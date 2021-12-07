const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const {User}=require('../models');

router.get('/',(req,res)=>{
    //res.send('로그인 페이지');
});

//로그인 시도
router.post('/',(req,res)=>{
    User.findOne({
       where:{name: req.body.Id}
    })
    .then((result)=>{
        //id와 일치하는 정보가 없는경우
        if(result === null || result === undefined){
            console.log("일치하는 id가 없습니다.")
            res.sendStatus(401);
        }
        //비밀번호 불일치
        else if(result.dataValues.pw != req.body.Password){
            console.log("일치하는 pw가 없습니다.")
            res.sendStatus(401);
        }
        else if(result.dataValues.pw == req.body.Password){
            req.session.id = result.dataValues.id;
            req.session.name = result.dataValues.name;
            req.session.personality = result.dataValues.personality;
            req.session.status = result.dataValues.status;
            console.log("Login");
            res.sendStatus(200);
        }
    })    
});




module.exports = router;