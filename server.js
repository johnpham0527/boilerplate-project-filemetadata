'use strict';

var express = require('express');
var cors = require('cors');
var multer = require('multer');

// require and use "multer"...
var upload = multer({ dest: 'uploads/' });

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.post('/', upload.single('upfile'), function (req, res, next) {
  if (err) {
    return next(err);
  }
  res.json({
    filename: req.file.filename,
    size: req.file.size
  })
})

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening... http://localhost:3000');
});
