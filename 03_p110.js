// p.109 코드 동적 변경하기 - user

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


const user = (req, res) => {
    const userInfo = url.parse(req.url, true).query;
    res.end(`[user] name : ${userInfo.name}, age: ${userInfo.age}`); // http: //localhost:3000/user?name=mike&age=20 으로 접속하면 mike, 20으로 뜨게 된다
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