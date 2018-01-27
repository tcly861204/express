const mysql = require('mysql');
const conn = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'studay'
});
conn.connect();

const mysqlRun = function(sql){
  var pro = new Promise(function(res,req){
    conn.query(sql,function(err,rows,fields){
      if(err){
        req('throw err'.err);
      }
      res(rows);
      conn.end();
    });
  });
  return pro;
}

module.exports = mysqlRun;

