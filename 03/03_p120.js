// API 규칙에 맞게 게시판 서버 구현하기

const express = require("express");
const app = express();
let posts = [];

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.json(posts); // 게시글을 넣어둔 배열 출력
});

app.post("/posts", (req, res) => {
    const { title, name, text } = req.body;

    posts.push({id: posts.length + 1, title, name, text, createdDt: Date()});
    res.json({ title, name, text });
});

app.delete("/posts/:id", (req, res) => {
    const id = req.params.id;
    const filteredPosts = posts.filter((post) => post.id !== +id); // filter() 활용 : url 뒤에 붙은 삭제할 id 와 일치하지 않는 id 글만 뽑아 다시 배열로 만듦
    const isLengthChanged = posts.length !== filteredPosts.length; // 변경 사항이 있는지 없는지 검사
    posts = filteredPosts; // filter()를 거친 배열을 다시 대입

    if(isLengthChanged){
        res.json("OK");
        return; 
    }

    res.json("NOT CHANGED");
});

app.listen(3000, () => {
    console.log("welcome posts START!");
});

/*

명령 프롬포트에 입력할 것!

등록 :
curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "title=value&name=value&text=value" http://localhost:3000/posts

삭제 :
curl -X DELETE localhost:3000/posts/value

*/