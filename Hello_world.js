const http = require("http");
 
http.createServer(function(request, response){
    response.setHeader("Content-Type", "text/html; charset=utf-8;");

    if(request.url === "/hello-world")
    {
        response.write("<h2>Hello world!</h2>");
    } 
    else
    {
        response.write("<h1>Not found</h1>");
    }

    response.end();
}).listen(3000);