var path = require("path");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, "/static")));

app.get('/', function(req, res) {
 
res.render('index');
})

app.listen(8000, function() {
 console.log("listening on port 8000");
})