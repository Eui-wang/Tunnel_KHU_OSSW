const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const auth = require("../obj/authorize");
const {User}=require('../models');


//로그아웃
router.get('/',auth,(req,res)=>{
            req.session.userid = null;
            req.session.name = null;
            req.session.personality = null;
            req.session.status = null;
            req.session.isAuthorized = null;
            console.log("Logout");
            res.sendStatus(200);
    })

    module.exports = router;