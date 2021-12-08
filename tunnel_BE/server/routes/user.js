const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const auth = require("../obj/authorize");

//로그인 된 회원정보 반환
router.get('/',auth,(req,res)=>{
   res.status(200).json({
    Id :req.session.userid,
    Password :req.session.name,
    Personality : req.session.personality,
    Status: req.session.status 
   }) 
});





module.exports = router;