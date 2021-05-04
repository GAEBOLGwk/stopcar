// node 后端服务器
const Stopcar = require('./api/Stopcar')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
//采用设置所有均可访问的方法解决跨域问题
app.all("*", function (req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200); //让options尝试请求快速结束
    else
        next();
})
app.use(bodyParser.json()) // 以json格式返回出去
app.use(bodyParser.urlencoded({ extended: false }))
// 后端api路由
 
// app.use('/api/Stu', Stopcar)
app.use('/api/stopcar', Stopcar)
// 监听端口
app.listen(8000)
console.log('success listen at port:8000......')














// // 使用 express 创建服务器
//  // 导入 express 模块
//  const express = require('express');
//  // 调用 express 函数，返回一个数据库实例
//  const app = express();
//  // 导入路由模块
//  const stopcar = require('./api/stopcar');
//  // 端口号
//  const port = 3000;
//  // 注册全局解析中间件
//  app.use(express.json());
//  app.use(express.urlencoded({ extended: false }));
//  // 注册路由模块
//  app.use('/api/stopcar', stopcar);
//  // 调用 app.listen() 启动服务器
//  app.listen(port, () => console.log(`Example app listening on port 3000!`));