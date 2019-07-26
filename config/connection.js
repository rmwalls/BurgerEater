var mysql = require("mysql");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  readburgers();
});

function readburgers() {
  connection.query("SELECT * FROM burgers", function(err, res) {
    if (err) throw err;

    // Log all results of the SELECT statement
    //console.log("in connection.js, line 23" + res);
    //connection.end();
  });
}
module.exports=connection;