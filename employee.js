var express = require('express');
var router = express.Router();
var con = require('./connection.js');
router.get('/', function (req, res) {
    con.query("select * from employee", function (err, employee) {
        if (err) {
            console.log("error");
        }
        res.send(employee);
    });

});
router.post('/', function (req, res) {
    var sql1 = "insert into employee SET ?";
    let post = {
        emp_id:req.body.emp_id,
        name: req.body.name,
        place: req.body.place,
        hsc_mark :req.body.hsc_mark,
        experience:req.body.experience
    }
    con.query(sql1, post, function (err, employee) {
        if (err) throw err;
        res.send(employee);
        console.log(employee);
    });
});
router.put('/', function (req, res) {
    emp_id = req.body.emp_id;
    var name = req.body.name;
    var place = req.body.place;
    var hsc_mark =req.body.hsc_mark;
    var experience=req.body.experience
    con.query("update employee set name = ?,place = ?,hsc_mark =?, experience =? WHERE emp_id  = ?", [name, place,hsc_mark,experience, emp_id], function (err, data) {
        if (err) throw err;
        console.log('data updated successfully!!!');
        res.send(employee);
    });
});
router.delete('/', function (req, res) {
    emp_id = req.body.emp_id;
    con.query("delete from employee where emp_id = ?", [emp_id], function (error, data) {
        if (error) throw error;
        res.send(employee);
        console.log('data deleted successfully!!!');
    });
});
router.get('/fresher', function (req, res) {
    con.query("select * from employee where experience = 0", function (err, employee) {
        if (err) {
            console.log("error");
        }
        res.send(employee);
        console.log("fresher employee are listed")
    });
});
router.get('/senior', function (req, res) {
    con.query("select * from employee where experience >=1", function (err, employee) {
        if (err) {
            console.log("error");
        }
        res.send(employee);
        console.log("senior employee are listed")
    });
});
router.get('/experience', function (req, res) {
    con.query("select * from employee where experience >=5", function (err, employee) {
        if (err) {
            console.log("error");
        }
        res.send(employee);
        console.log("experience employee are listed")
    });
});
module.exports = router;