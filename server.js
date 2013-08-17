var express = require('express');
var fs = require("fs");
var app = express.createServer(express.logger());
var path = require('path');

var indexText = fs.readFileSync("test.html");

app.use('/jquery', express.static(__dirname + '/jquery'));
app.use('/handlebars', express.static(__dirname + '/handlebars'));


app.get('/', function(request, response) {
  response.send(indexText.toString());
});

var port = process.env.PORT || 8889;
app.listen(port, function() {
  console.log("Listening on " + port);
});

