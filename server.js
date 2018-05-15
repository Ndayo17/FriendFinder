// Dependencies/npm packages to use 

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path')

//creates express server and sets up a port
var app = express(); 
var PORT = process.env.PORT|| 8000;

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//Router
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);






//Start our server
app.listen(PORT, function() {
    console.log(" listening to the PORT: " + PORT);
  });