// 04_p137의 패키지 test1을 불러와 사용해 보기

const calc = require("test1");

const a = 17;
const b = 3;

console.log("a + b = ", calc.add(a, b));
console.log("a - b = ", calc.sub(a, b));
console.log("a * b = ", calc.multi(a, b));
console.log("a / b = ", calc.div(a, b));