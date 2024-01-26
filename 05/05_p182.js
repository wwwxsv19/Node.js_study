// Promise 의 문제점 

/*
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
}); // 매우 간결하고 깔끔한 체이닝 코드... 실제로 존재하긴 힘들다.
*/

// 더 복잡한 Promise 코드!!

const axios = require("axios");
const url = "https://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json";

axios.get(url).then((result) => {
    if(result.status != 200) {
        throw new Error("요청에 실패했습니다!");
    }
    
    if(result.data) {
        return result.data;
    }

    throw new Error("데이터 없습니다.");
}).then((data) => {
    if(!data.articleList || data.articleList.size == 0) {
        throw new Error("데이터가 없습니다.");
    }
    return data.articleList;
})
.then((articles) => {
    return articles.map((article, idx) => {
        return { title : article.title, rank : idx + 1};
    });
})
.then((results) => {
    for(let movieInfo of results) {
        console.log(`[${movieInfo.rank}위] ${movieInfo.title}`);
    }
})
.catch((err) => {
    console.log("<<에러 발생>>");
    console.error(err);
});