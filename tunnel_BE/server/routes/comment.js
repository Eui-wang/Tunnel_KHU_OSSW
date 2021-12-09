const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const auth = require("../obj/authorize");

const {User}=require('../models'); //유저정보 db연결
const {Post}=require('../models'); //게시물정보 db연결
const {Comment}=require('../models');


//현재 로그인된 사용자의 게시물 배열 응답
router.post('/reply',auth,(req,res)=>{

    Comment.findAll({
        where:{postid: req.body.id},
        order: [['created_at', 'ASC']],
     })
     .then((result)=>{
        //console.log(result);
        res.send(result);
         //게시물이 0개인 경우
        //  if(result === null || result === undefined){
        //      console.log("해당유저의 게시물이 없습니다.")
        //      res.status(401).send("null");
        //  }
        //  else{
            //  console.log(result.length);
            //  res.sendStatus(200);
        //  }
     })
});

//게시물 작성
router.post('/write',auth,(req,res)=>{
    console.log(req.params.id);
    try{
    Comment.create({
        userid : req.session.name,
        postid : req.body.postid,
        comment : req.body.comment,
    })
    console.log("게시");
    res.sendStatus(200);
    } catch(err){
        console.log("실패");
        res.send(err);
    }
    /*
    User.create({
    
        name: req.body.Id,
                pw:req.body.Password,
                personality:req.body.Personality,
                status:false
                */
});

     




module.exports = router;