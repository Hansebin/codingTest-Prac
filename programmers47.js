// 369게임
// 숫자를 매개뱐수로 받는 함수 solution
// 매개변수로 받은 숫자에서 3,6,9가 들어있으면 박수1번
// 총 박수를 결과로 출력

function solution (order) {
    return String(order).split("").filter(n => n == 3 || n == 6 || n == 9).length
}

console.log(solution(36941))
