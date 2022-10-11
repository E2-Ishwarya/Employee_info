var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Employee'
});
con.connect(function (err) {
    if (err) { console.log("error"); }
    else console.log("connection success"); 
    con.query("create table employee(emp_id int ,name varchar(20),place varchar(20),hsc_mark int,experience int)",function(err,data){
        console.log("table created");
      });
});
module.exports = con;