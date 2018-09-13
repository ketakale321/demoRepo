var http=require('http');
var url=require('url');
var fs=require('fs');
var uc=require('upper-case');
http.createServer(function(req,res){
    var _url=req.url;
    var q=url.parse(_url,true);
    // var q=url.parse("https://www.google.co.in/search?q=hello&oq=hello&aqs=chrome..69i57j69i60l3j0l2.1095j0j7&sourceid=chrome&ie=UTF-8",true);
    var fileName="."+q.pathname+".html";
    fs.readFile(fileName,function(err,data){
        if(err){
            res.writeHead(404,{'Content-Type':'text/html'});
            return res.end(uc("File not found"));
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);