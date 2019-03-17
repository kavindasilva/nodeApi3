

/**
	DB connecting function
*/

var mysql=require('mysql');

//var connection=mysql.createPool({
var connection=mysql.createConnection({
	host:'127.0.0.1',
	user:'ks',
	password:'1',
	database:'pal-is2002'
});

connection.connect(function(err) {
	if (err){ console.log(err); throw err; }
	console.log("Connected to "+"DB");
});/**/

module.exports=connection;
