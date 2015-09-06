var express = require('express');
var app = express();



process.env.PWD = process.cwd();
app.set('port', (process.env.PORT || 5000));
app.use(express.static(path.join(process.env.PWD, 'public')));

app.get('/', function(request, response) {
  response.sendfile('index.html');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
