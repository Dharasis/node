// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//     host     : 'sql12.freemysqlhosting.net',
//     user     : 'sql12173019',
//     password : 'wmxUjvYg8D',
//     database : 'sql12173019'
// });

// connection.connect();
// connection.query('INSERT INTO UserInformation(userName, userPassword) VALUES ( "Bharat", "Qwerty123")', function (err, recordset) {
//   if (!err)
//     console.log('The solution is: ', recordset);
//   else
//     console.log('Error while performing Query.');
// });

// connection.end();

var express    = require('express');
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'sql12.freemysqlhosting.net',
    user     : 'sql12173019',
    password : 'wmxUjvYg8D',
    database : 'sql12173019'
});
var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});

app.get("/UserInformation",function(req,res){
connection.query('INSERT INTO UserInformation(userName, userPassword) VALUES ( "SudipBhai", "Qwerty123")', function(err, rows, fields) {
connection.end();
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
  });
});

var server = app.listen(8081,199.59.243.120, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})
