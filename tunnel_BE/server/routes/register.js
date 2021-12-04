const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

router.post('/',(req,res)=>{
    console.log(req.body);
});

router.get('/',(req,res)=>{
    //res.json({id: "hi"});
    //console.log(res.body);
});

//라우트 매개변수사용 
//뒤에 위치 요구
/*
router.get("/:id",(req,res)=>{
    console.log(req.params, req.query);
    //req.body;
});
*/



module.exports = router;