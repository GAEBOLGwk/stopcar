// const mysql = require('mysql');
    
// let connection = mysql.createConnection({
//     host : 'localhost',
//     user : 'root', 
//     password : '',
//     database : 'car'
// });

const mysql = require('mysql');
module.exports = {
  config: {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'car'
  },
  sql_connect: function (sql, arr, callBack) {
    var pool = mysql.createPool(this.config);
    pool.getConnection((err, conn) => {
      if (err) return console.log(err + 'dbconfig连接函数出错');
      conn.query(sql, arr, callBack);
      conn.release();
    })
  },
} 

// connection.connect(function(err) {
// if (err) {
// console.error('连接失败: ' + err.stack);
// return;
// }

// console.log('连接成功 id ' + connection.threadId);
// });


// connection.query('select * from stopcar', [],function(result,fields){
//     console.log('查询结果：');
//     console.log(result);
// });
// //添加实例
// var  addSql = 'INSERT INTO websites(username,password) VALUES(?,?)';
// var  addSqlParams =['咕噜先森', '666'];
// db.query(addSql,addSqlParams,function(result,fields){
//     console.log('添加成功')
// })
