const fs = require("fs");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    fs.readFile("index.html", function(err, data){
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.end(data);
    })
});

app.get("/hello", (req, res) => {
    fs.readFile("hello.html", function(err, data){
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.end(data);
    })
});

app.listen(3000, () => {
    console.log("OK 서버 시작!");
});