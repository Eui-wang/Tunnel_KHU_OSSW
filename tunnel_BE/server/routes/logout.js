const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const {User}=require('../models');

router.get('/',(req,res)=>{
    
});

//로그아웃
router.post('/',(req,res)=>{
     if(result.dataValues.pw == req.body.Password){
            req.session.id = null;
            req.session.name = null;
            req.session.personality = null;
            req.session.status = null;
            req.session.isAuthorized = null;
            console.log("Logout");
            res.sendStatus(200);
        }
    })

    module.exports = router;