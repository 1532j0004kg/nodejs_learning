var http = require('http');
var static = require('./static.js');

http.createServer(function(request,response){
  if(static.canHandleRequest(request))
  {
    static.staticContentHandler(request,response);
    return ;
  }

  response.end("hello world !!! ");
}).listen(3000,()=>console.log("server is listening on 3000 , hurray!"))
