
/**
	API functions Modal file1
*/

var express = require('express');
var router = express.Router();
//var dbcon=require("./dbcon");
var conn=require("./dbcon2");


/*
	`vid`, `make`, `model`, `regno`, `color`, `status`, `features`, `owner`
	vid, make, model,   regno, color, status,   features, owner
*/
var vehicles={
	getAll:function(){
		console.log("getall called");
		let sql="select * from vehicle; ";
		conn.query(sql, function (err, result, fields) {
			if (err) 
				throw err;
			console.log(result);
		});
	},

	delete: function(id, callback){
		return conn.query("DELETE FROM vehicle where vid=?;",[id], callback);
	},

	addNew:function(postData,callback){
 		//return conn.query("Insert into vehicle values(null,?,?,?)",[postData.email,postData.pass,postData.pic],callback); // this handles sqli
 		//return conn.query("Insert into vehicle values(null,'"+postData.email+"', '"+postData.pass+"','"+postData.pic+"')",callback); // this provides error on sqli

 		return conn.query("Insert into vehicle values(null, ?,?,?, ?,?,?, ?)",
 			[ postData.veMake, postData.veModel, postData.veRegNo,    
 			postData.veColor, postData.veStatus, postData.veFeatures,    postData.veOwner ],
 			callback); 
 	},

	getAllJson:function(callback){
		//console.log("getall called");
		let sql="select * from vehicle; ";
		return conn.query(sql, callback);
	},

	getOne:function(id, callback){
		let sql="select * from vehicle where vid=?; ";
		return conn.query(sql,[id], callback);
	},

	saveItem: function(putData, callback){
		//console.log(putData.id);
 		return conn.query("UPDATE vehicle SET make=?, model=?, regno=?,    color=?, status=?, features=?,    owner=? WHERE vid=? ;",
 			[putData.veMake, putData.veModel, putData.veRegNo,    
 			putData.veColor, putData.veStatus, putData.veFeatures,    putData.veOwner,   putData.veId],
 			callback); 
	}
}

/*con.query("SELECT * FROM vehicle", function (err, result, fields) {
	if (err) throw err;
	console.log(result);
});*/


//module.exports = router;
module.exports = vehicles;

