// // todo sql 语句留后面调用
//  module.exports = {
//       stopcar: {
//       // ? 占位符 后面给数据自动填充
//       add: 'insert into stopcar(time,carid) values(?,?)',
//       get: 'select * from stopcar',
//       },
//      };


// sqlMap.js  sql语句
var sqlmap = {
    Stu: {
      add: 'insert into stopcar(time,carid) values(?,?)',
    //   show: 'select * from stopcar',
      show: 'select * from stopcar order by id desc LIMIT 1',
      del: 'delete from stopcar where stu_Id = ?',
      update: 'update stopcar set stu_name = ?,stu_sex = ?,stu_college = ?,stu_class = ? where stu_Id = ?'
    }
  }
   
module.exports = sqlmap