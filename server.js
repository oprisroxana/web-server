var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
// route level middleware
var middleware = require('./middleware');

//app.use(middleware.requireAuthentication);
 app.use(middleware.logger);
 app.get('/about', middleware.requireAuthentication, function(req, res){
   res.send('This is about us page!');
 });

app.use(express.static(__dirname  + '/public'));

app.listen(PORT, function(){
  console.log('Express server started on port ' + PORT);
});
