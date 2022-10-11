var express = require('express');
var app = express();
app.use(express.json());
const employee = require('./employee');
app.use('/employee',employee);
app.listen(8080);