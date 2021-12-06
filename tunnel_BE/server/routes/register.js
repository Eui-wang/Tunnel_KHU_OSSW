const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

/////////////
const {User}=require('../models');
//////////

router.get('/',(req,res)=>{
    res.send('회원가입 페이지');
});

router.post('/',(req,res)=>{
    User.create({
        name: req.body.Id,
        pw:req.body.Password,
        personality:req.body.Personality,
        status:false
    })
    console.log(req.body);
    return res.sendStatus(200);
});

//라우트 매개변수사용 
//뒤에 위치 요구
router.get("/:id",(req,res)=>{
    console.log(req.params, req.query);
    req.body;
});



module.exports = router;