const http = require("http");
const fs = require("fs");
const url = require("url");

http.createServer((req, res) => {
    const path = "";

    if(req.url == '/'){
        path = 'index.html';
    } else if(req.url = '/hello'){
        path = 'hello.html';
    } 

    fs.readFile(path, (err, data) => {
        if(err){
            res.writeHead(404);
            res.end('File not found');
        } else{
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end(data);
        }
    });
}).listen("3000", () => console.log("OK 서버 시작!"));