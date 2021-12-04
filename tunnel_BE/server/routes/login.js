const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

router.get('/',(req,res)=>{
    //res.send('로그인 페이지');
});


//라우트 매개변수사용 
//후방 위치 요구
/*
router.get("/:id",(req,res)=>{
    console.log(req.body);
    //res.json({id:"oss_hi"});
});
*/



module.exports = router;