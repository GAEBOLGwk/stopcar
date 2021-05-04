const models = require('../db')
const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const $sql = require('../sqlmap')
// 连接数据库
const conn = mysql.createConnection(models.mysql)
conn.connect()
const jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1', msg: '操作失败'
    })
  } else {
    res.json(
      ret
    )
  }
}
// 接口：增加信息
router.post('/add', (req, res) => {
  const sql = $sql.Stu.add
  const params = req.body
  console.log('添加', params)
  conn.query(sql, [params.time, params.carid, params.weizhie,], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})
 
// 接口：查询全部
router.get('/show', (req, res) => {
  const sql = $sql.Stu.show
  const params = req.body
  console.log(params)
  conn.query(sql,[params.time, params.carid, params.weizhie,], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})
 
// 接口：删除信息
router.post('/del', (req, res) => {
  const sql = $sql.Stu.del
  const params = req.body
  console.log('删除', params)
  conn.query(sql, [params.stu_Id], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})
 
// 接口：修改信息
router.post('/update', (req, res) => {
  const sql = $sql.Stu.update
  const params = req.body
  console.log('修改', params)
  conn.query(sql, [params.stu_name, params.stu_sex, params.stu_college, params.stu_class, params.stu_Id], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})
 
module.exports = router












// // 测试用 api 实例
//  var models = require('../db');
//  var express = require('express');
//  var router = express.Router();
//  var mysql = require('mysql');
//  var $sql = require('../sqlmap');
//  // 连接数据库
//  var conn = mysql.createConnection(models.mysql);
//  conn.connect();
//  var jsonWrite = (res, ret) => {
//   if (typeof ret === 'undefined') {
//   res.json({
//   code: '1',
//   msg: '操作失败',
//   });
//   } else {
//   res.json(ret);
//   }
//  };
//  // 增加用户接口
//  // POST 请求
//  router.post('/addUser', (req, res) => {
//   var sql = $sql.stopcar.add;
//   var params = req.body;
//   console.log(params);
//   // ! [params.username, params.age] 自动填充到之前 ？ 里面
//   conn.query(sql, [params.time, params.carid,params.weizhi], (err, result) => {
//   if (err) return console.log(err);
//   if (result) {
//   jsonWrite(res, result);
//   }
//   });
//  });
//  // GET 请求
//  router.get('/getUser', (req, res) => {
//   let sql = $sql.stopcar.get;
//   let params = req.query;
//   console.log(params);
//   conn.query(sql, (err, result) => {
//   if (err) {
//   console.log(err);
//   }
//   console.log(res, result);
//   });
//  });
//  module.exports = router;