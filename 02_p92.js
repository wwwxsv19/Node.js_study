// hello Node.js 출력 서버 구현

const http = require("http"); // http 객체 생성
let count = 0;

const server = http.createServer((req, res) => { // 서버 객체 생성
	log(count);
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/plain");
	res.write("hello\n");
	setTimeout(() => {
		res.end("Node.js");
	}, 2000);
});

function log(count) {
	console.count((count += 1));
}

server.listen(8000); // 8000번 포트로 서버 실행