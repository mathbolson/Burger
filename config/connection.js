var mysql = require("mysql");

// Sets up the Express app to handle data parsing

var connection = mysql.createConnection({
  host: "us-cdbr-east-02.cleardb.com",
  port: 3306,
  user: "be7cdaa65fea7b",
  password: "d7d3618f85588d1",
  database: "heroku_7bd8043123f8462"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
}); 
// Export connection for our ORM to use.
module.exports = connection;
