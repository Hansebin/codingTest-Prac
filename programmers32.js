// 세균 증식
// 어떤 세균은 1시간만에 2베로 증식
// 세균 수와 시간을 매개변수로 받는 함수 solution
// n시간 후 세균의 수를 반환
// 2, 10 -> 1시간 후 4마리, 2시간 후 8마리, 3시간 후 16마리... => 2048

function solution (n ,t) {
    let result = n
    let i = 1;

    for (let i = 1; i <= t; i++){
        result = result * 2
        // 1부터 t까지 돌리기
        // 결과값에 계속 2씩 곱하기
    }

    return result
}

console.log(solution(7, 15))
// 2 -> 4 -> 16 -> 256 ...