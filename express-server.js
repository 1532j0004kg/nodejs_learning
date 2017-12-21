var express = require('express');

var app = express();

app.get('/wes',function(request,response)
  {
    response.end("hello wes express !!!");
  });

app.listen(3000,()=>console.log("server is listening on 3000 , hurray!"));
