const express = require("express");
const path = require("path");
const router = express.Router();

router.get('/',(req,res)=>{    
   // res.sendFile(path.join(__dirname, '../../../turnel_FE/public/index.html'));
   res.send("index");
});

module.exports = router;