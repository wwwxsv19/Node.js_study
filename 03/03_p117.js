// p.112 익스프레스로 구현

const url = require("url");
const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log("익스프레스로 라우터 리팩터링하기");
});

app.get("/", (_, res) => res.end("HOME"));
app.get("/user", user);
app.get("/feed", feed);

// 호이스팅을 위해 function 으로 변환
function user(req, res) {
    const user = url.parse(req.url, true).query; // in 연산자를 활용해서 객체의 키 유무 조사 후 반환
    res.json(`[user] name : ${user.name}, age: ${user.age}`);  // 반한된 키로 함수 실행
};

function feed(_, res) { // 사용하지는 않지만 구조상 넣어야 하는 변수는 _ 로 처리
    res.json(`<ul>
        <li>picture1</li>
        <li>picture2</li>
        <li>picture3</li>
        </ul>`
    );
}