// 짝수는 싫어요
// 정수가 매개변수로 주어지는 함수 solution은 정수 이하의 수들 중에서 홀수만 뽑아 오름차순으로 배열에 담아 출력한다.

function solution(n){
    let result = []

    for (let i = 1; i <= n; i+=2){
        // 홀수만 담아야 하기 때문에 1부터 n까지 순차적으로 도는데 i을 2씩 증가시킨다.
        result.push(i)
        // 하나씩 배열에 넣어준다.
    }

    return result
}

console.log(solution(15))