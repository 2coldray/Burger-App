// Set up MySQL connection.
var mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "GTfulltime24",
    database: "burgers_db"
  });
}

// Export connection for our ORM to use.
module.exports = connection;