// p.107 코드 리팩토링 (*리팩토링 : 코드의 출력값은 변하지 않되 가독성 향상 따위를 목적으로 한 코드 수정)

const http = require("http");
const url = require("url");

http.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;
    res.setHeader("Content-Type", "text/html");

    if(path == "/user") {
        user(req, res);
    } else if(path == "/feed") {
        feed(req, res);
    } else {
        notFound(req, res);
    }
}).listen("3000", () => console.log("OK 서버 시작!"));


// 함수를 구현해 코드의 가독성 향상 및 수정을 용이하게

const user = (req, res) => {
    res.end("[user] name : andy, age: 30");
};

const feed = (req, res) => {
    res.end(`<ul>
        <li>picture1</li>
        <li>picture2</li>
        <li>picture3</li>
        </ul>`
    );
};

const notFound = (req, res) => {
    res.statuscode = 404;
        res.end("404 page not found");
};