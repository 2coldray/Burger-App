var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

const connection = require("./config/connection.js");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");
const hbs = require("handlebars");
const path = require("path");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// hbs.registerPartial(path.join(__dirname, "views/burger-block"))


// Import routes and give the server access to them.
var routes = require("./controllers/burger-controllers.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});