var express = require('express');
var router = express.Router();
var fs= require('fs')

/* GET home page. */
router.post('/public/index', function(req, res, next) {
  res.header('Access-Control-Allow-Origin',"*")
  ///public/index
  var nm=req.body.title;
  var nr=req.body.cont;
    //console.log(req)
  //fs.readFile('jgr.txt','req.body.nm','utf-8',function(err,data){
  //    fs.writeFile('jgr.txt', nm, function (err) {
  //      res.render('index', {name: nm});
  //    })
  //
  //})

  res.send({'name':nm,'name2':nr})
});





//router.post('/public/index', function(req, res, next) {
//  res.header('Access-Control-Allow-Origin',"*")
//  switch (req.body.abc){
//    case "1":
//      temp=["北京","财经","H5"]
//      break;
//    case "2":
//      temp=["小明","小红","小白"]
//      break;
//  }
//  res.send( { name:temp });
//});

module.exports = router;
