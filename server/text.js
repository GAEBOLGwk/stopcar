var express = require('express');
var router = express.Router();
var Mysqlconnect = require('mysql');
    var sql = Mysqlconnect.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'trip'
      });
      sql.connect();
    /* GET users listing. */
    router.get('/', function(req, res, next) {
            sql.query("select * from login",[],function(err,data){
                console.log(data);
                res.send(data);
            });
        
    });
    // 登录
    router.post('/login', function(req, res, next) {
          console.log(req.body.username);
            sql.query("select * from login where username = ? and password = ?",
                                [req.body.username,req.body.password],function(err,data){
                console.log(data);
                if(err){
                    console.log(err);
                    return;
                }
                res.send(data);
            });
        
    });
    // 注册
    router.post('/register', function(req, res, next) {
          console.log(req.body.username);
            sql.query("insert into login (username,password,phone) value (?,?,?)",
                          [req.body.username,req.body.password,req.body.phone],function(err,data){
                console.log(data);
                if(err){
                    console.log(err);
                    return;
                }
                res.json({res_code:0});
            });
        
    });