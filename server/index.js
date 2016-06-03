var express = require('express');
var app = express();

app.get('/api/', function (req, res) {
  res.send('api index!');
});

app.get('*', function (req, res) {
  res.send(req.originalUrl);
});

app.listen(8081, function () {
  console.log('Example app listening on port 8081!');
});