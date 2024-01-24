// Promise 의 문제점 

// 이상적인 Promise 코드 ~~
function goodPromise(a) {
    return new Promise((resolve, reject) => {
        resolve(a);
    });
}

goodPromise("안녕하세요 ")
    .then((a) => {
        return a += "이것은 ";
    })
    .then((a) => {
        return a += "정말 이상적이고 좋은 ";
    })
    .then((a) => {
        return a += "Promise 예시입니다.";
    })
    .then((a) => {
        console.log(a);
    })
    .catch((err) => {
        console.log(err);
    }); // 매우 깔끔한 체이닝 코드... 실제로 존재하긴 힘들다.

/*

*/