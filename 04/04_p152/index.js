// npx prettier 사용해 보기

function getRandonInt(min, max) {
  // 주석도 포맷팅 가능!

  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRandonInt(10, 20));

/*
원래 코드 :
function getRandonInt(
    min, 
    max) // 주석도 포맷팅 가능!

{
    return Math.floor(
        Math.random()
        * (max - min)) + min;
}

console.log(
    getRandonInt
    (10, 20));
*/
