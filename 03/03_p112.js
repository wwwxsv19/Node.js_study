// 라우터 리팩토링

const http = require("http");
const url = require("url");

http.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;
    res.setHeader("Content-Type", "text/html");

    if(path in urlMap) {
        urlMap[path](req, res);
    } else {
        notFound(req, res);
    }
}).listen("3000", () => console.log("OK 서버 시작!"));


const user = (req, res) => {
    const userInfo = url.parse(req.url, true).query; // in 연산자를 활용해서 객체의 키 유무 조사 후 반환
    res.end(`[user] name : ${userInfo.name}, age: ${userInfo.age}`);  // 반한된 키로 함수 실행
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


const urlMap = { // 파이썬의 딕셔너리, 키와 값 매칭
    "/" : (req, res) => res.end("HOME"),
    "/user" : user,
    "/feed" : feed,
}