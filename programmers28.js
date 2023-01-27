// 제곱수 판별하기
// 정수 하나가 매개변수로 주어지는 함수 solution
// 매개변수로 주어진 정수가 제곱수라면 1을 출력, 제곱수가 아니라면 2를 출력

function solution (num) {
    let result = 2

    for (let i = 1; i <= num; i++){
        if (num / i === i){
            result = 1
        }
        // 1 ~ num까지의 숫자 중 나누는 수와 몫이 같다면 제곱수 -> result에 1 대입
    }

    return result
}

console.log(solution(976))