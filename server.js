var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("<h1> Welcome to andy from CICD Cloud Functions v1.0</h1>");
}
var www = http.createServer(handleRequest);
www.listen(8080);
