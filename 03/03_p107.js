// URL 경로에 따라 각각 다른 응답을 주는 서버 구현

const http = require("http");
const url = require("url");

http.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;
    res.setHeader("Content-Type", "text/html");

    if(path == "/user") {
        res.end("[user] name : andy, age: 30");
    } else if(path == "/feed") {
        res.end(`<ul>
        <li>picture1</li>
        <li>picture2</li>
        <li>picture3</li>
        </ul>
        `);
    } else {
        res.statuscode = 404;
        res.end("404 page not found");
    }
}).listen("3000", () => console.log("OK 서버 시작!"));