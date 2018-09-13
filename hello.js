var http=require('http');
// var myModule=require('./hello2');
var url=require('url');
var fs=require('fs');
http.createServer(function(req,res){
    // res.writeHead(200,{'Content-Type':'text/html'});
    // var xyz="<p>Hello this is HTML</p><h2>This is from server</h2>";
    // var xyz= "Hello world";
    // res.write(xyz);
    function ignoreFavicon(req, res, next) {
        if (req.originalUrl === '/favicon.ico') {
          res.status(204).json({nope: true});
        } else {
          next();
        }
    }
    fs.readFile('newhtml.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    });

    fs.appendFile("abc.txt","Hello world !!!",function(err){
        if(err){
            throw err;
        }else{
            console.log('no error1 found');
        }
    });
    fs.writeFile("abc2.txt","hello ketan!!",function(err){
        if(err){
            throw err;
        }else{
            console.log('no error2 found');
        }
    });
    fs.unlink("abc.txt",function(err){
        if(err){
            console.log('Error in deleting file');
        }
        else{
            console.log('File deleted');
        }
    });
    fs.rename("abc2.txt","hell.txt",function(err){
        if(err){
            console.log(err);
        }else{
            console.log('File renamed..');
        }
    });
    // res.end();
}).listen(8080);