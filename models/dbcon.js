
/**
	DB connection parameters	**not useed
*/

// Set database connection credentials
const config = {
	host: '127.0.0.1',
	user: 'ks1',
	password: '11',
	database: 'api',
};

const mysql = require('mysql');

var con = mysql.createConnection({
	host: '127.0.0.1',
	user: 'ks1',
	password: '11',
	database: 'api',
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


//module.exports = router;

