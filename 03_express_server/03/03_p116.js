// express 라이브러리를 불러와 서버 열기

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.set({ "Content-Type" : "text/HTMLAllCollection; charset=utf-8"});
    res.end("헬로 Express");
});

app.listen(port, () => {
    console.log(`START SERVER : use ${port}`);
});