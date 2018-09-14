
// NPM dependency.
var mysql = require('mysql');

// Connect to JAWS_DB if on Heroku, or a local MySQL instance if not.
// var connection;

 if (process.env.JAWSDB_URL) {
     connection = mysql.createConnection(process.env.JAWSDB_URL);
 } else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'burgers_db'
    });
 };

// Make connection.
connection.connect(function(err){
    if(err) {
        console.log("error connecting: " + err.stack)
        return;
    }
    console.log("connection as id " + connection.threadID)
});

module.exports = connection;