var express = require('express');
var mongoose = require('mongoose');

const toolshed_tom = express();

mongoose.connect("mongodb://admin:admin@ds225078.mlab.com:25078/toms_toolshed");

var Tool = mongoose.model('Tool', { name: String, description: String });

toolshed_tom.get("/tools", function(req, res) {
  Tool.find().then(function(data) {
    res.send(data);
  });
});

const PORT = process.env.PORT || 3000;

toolshed_tom.listen(PORT);
