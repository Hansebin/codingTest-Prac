// 1부터 100까지 더하는 for문을 만들고 결과를 출력

let sum = 0;
// 더한 값을 담아두는 변수 생성
// 아무런 값을 더하지 않았기 때문에 0으로 시작

for (let i=1; i <=100; i++){
    sum = sum + i
    // 기존 더한 값 sum에 + i를 해서 sum을 계속 업데이트
    // sum += i와 같은 표현식
}

console.log(sum)
