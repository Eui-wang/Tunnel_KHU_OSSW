const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

router.get('/',(req,res)=>{
    if (req.session.name != null && req.session.name != undefined){
        console.log(req.session.name);
        res.sendStatus(200);
    }
	else{
        console.log("미가입자 접근");
        res.sendStatus(401);
    }
});
module.exports = router;