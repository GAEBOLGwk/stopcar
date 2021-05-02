// todo sql 语句留后面调用
 module.exports = {
      stopcar: {
      // ? 占位符 后面给数据自动填充
      add: 'insert into stopcar(time,carid) values(?,?)',
      get: 'select * from stopcar',
      },
     };



    