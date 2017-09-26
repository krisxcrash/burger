//MySQL Connection set up
var mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {
    // We are in production
    conntection= mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE_NAME
    });
} else {
    // We are in a local environment
    connection = mysql.createConnection({
        host: "localhost",
        user: "uci.projects",
        password: "uciprojects123",
        database: "burgers_DB"
    });
}; 

//Make Connection
connection.connect(function(err){
    if (err) {
        console.log("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as ID: " + connection.threadId);
});

//Export connection for the ORM to use.
module.exports = connection;