var fs = require('fs');

function canHandleRequest(request)
{
  return  request.url.startsWith('/static/') || request.url === '/index1.html';
}
exports.canHandleRequest = canHandleRequest;

function staticContentHandler(request,response)
{

  var url = request.url.substr(1);

  if(url == 'index1.html')
  {
    url = 'static/index1.html'
  }

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
