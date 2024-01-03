// k6을 통해 p.92 의 성능 테스트

import http from "k6/http";

export const options = {
    vus: 500, // 500명의 유저가
    duration: "10s", // 10초 동안 요청 발송
};

export default function () {
    http.get("http://localhost:8000");
}

// 내 노트북 기준 vus 500 부턴 렉이 걸린다! 미리미리 알아두면 좋다!

// Know : 싱글 스레드이지만 비동기로 요청 처리 가능