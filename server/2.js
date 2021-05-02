var express = require('express');
var router = express.Router();
var db = require('./connect')
/* GET home page. */
router.get('/', function(req, res, next) {
  var sql = "select * from 2text";
  var arr = [];
  var callback = (err,data) =>{

    if(err){
      console.log('出错了')
    }else {
      res.send({
        'list':data
      })
    }
  }
  db.sql_connect(sql,arr,callback)
  // res.render('index', { title: 'Express' });
});


module.exports = router;
