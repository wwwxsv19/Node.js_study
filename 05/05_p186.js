// Promise 의 문제점 2

function myWork(work) {
    return new Promise((resolve, reject) => {
        if(work == 'done') {
            resolve('게임 가능');
        } else {
            reject(new Error("게임 불가능"));
        }
    })
}

// 콜백과 동일한 꼴
myWork('done').then(function(value) { console.log(value) }, function(err) { console.error(err) });

// 좋은 예시 => catch 를 활용해 에러를 예외 처리
myWork('doing').then(function(value) { console.log(value) }).catch(function(err) { console.error(err) });