var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("ssHello World1912");
});

app.listen(4000);
