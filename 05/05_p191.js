// p182 의 top 20 영화 순위 가져오기를 promise -> async await

const axios = require("axios");

async function getMovies() {
    const url = "https://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json";
    try {
        const result = await axios.get(url);
        const {data} = result;

        if(!data.articleList || data.articleList.szie == 0) {
            throw new Error("데이터가 없습니다.");
        }

        const movieInfos = data.articleList.map((article, idx) => {
            return { title : article.title, rank : idx + 1 };
        });

        for(let movieInfo of movieInfos) {
            console.log(`[${movieInfo.rank}위] ${movieInfo.title}`);
        }
    } catch(err) {
        throw new Error(err);
    } 
}

getMovies();

// then 으로 과도하게 연결되어 있던 promise 보다 동기 방식의 코드를 유지 가능함!