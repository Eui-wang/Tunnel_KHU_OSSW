const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const auth = require("../obj/authorize");

const {User}=require('../models');

router.get('/',auth,(req,res)=>{
    //메인페이지

    //테스트 코드
    console.log(req.session.id);
    res.send(req.session.name);
});




module.exports = router;