var http = require('http');
var fs = require('fs');


//create a server
http.createServer(
function (req,res) { 
                var files = fs.createReadStream("package.json");
                res.writeHead(200,
                                  {"
                                    Content-disposition': 'attachement;
                                    filename=package.json //here you can specify file name also content-type
                                  "}
                             )
                             files.pipe(res);
                    }
                  ).listen(8080); //the server object listens on port 8080
                                                      
