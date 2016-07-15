//External modules
var express = require('express');
var morgan = require('morgan');

//Custom modules
var dishRouter = require('./dishRouter');
var promoRouter = require('./promotionsRouter');

var hostname = 'localhost';
var port = 3000;
var app = express();

app.use(morgan('dev'));
app.use('/dishes', dishRouter.getRouter());
app.use('/promotions', promoRouter.getRouter());
app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function() {
  console.log(`Server running at http://${hostname}:${port}/`);
});