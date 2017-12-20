var fs = require('fs');

function canHandleRequest(request)
{
  return  request.url.startsWith('/static/') ;
}
exports.canHandleRequest = canHandleRequest;

function staticContentHandler(request,response)
{
  var url = request.url.substr(1);
  fs.readFile(url,function(error,data){
    if(error)
    {
      console.log("file not found : "+error);
      response.statusCode = 404;
      response.end();
      return;
    }
    response.end(data);
    console.log("end of funcion");
  });
  console.log("end of real funcion");
}

exports.staticContentHandler = staticContentHandler;
