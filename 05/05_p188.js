// Promise 가 발전된 async await 사용해 보기

// async : 비동기 함수 -> promise 반환
async function myName() {
    return "Andy";
}

// 추가 await : 기다린다 -> async 함수 안에서 promise 객체의 실행 완료까지 대기 
async function showName() {
    const name = await myName();
    console.log(name);
}

console.log(showName()); 