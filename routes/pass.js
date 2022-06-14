var express = require('express');
var router = express.Router();

router.get('/checkpassword',function(req,res){
    var password=req.query.passcode;
    console.log(password);
})

router.get('/checkpass',function(req,res){
    res.render('checkpass')
})

module.exports = router;