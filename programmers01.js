// 정수 n을 매개변수로 받는 함수
// 정수 n이 주어질 때, n 이하의 짝수를 모두 더한 값을 return 하는 함수 solution

function solution (num){
    let result = 0
    for (let i = 2; i <= num; i+=2){
        // 짝수만 더하는 것이기 때문에 2씩 증가하도록
        result += i
        // result = result + i
    }
    return result
}

console.log(solution(10))