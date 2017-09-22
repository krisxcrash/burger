//MySQL Connection set up
var mysql = require('mysql');

var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "uci.projects",
    password: "uciprojects123",
    database: "burgers_DB"
});

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