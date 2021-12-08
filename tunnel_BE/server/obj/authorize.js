const express = require("express");

var auth = function (req, res, next) {
	// Session Check
	// 어드민 여부 체크 필요
	console.log(req.session.name);
	if (req.session.name != null && req.session.name != undefined)
        next();
	else{
        console.log("미가입자 접근")
        res.sendStatus(401);
    }
		

};

module.exports = auth;