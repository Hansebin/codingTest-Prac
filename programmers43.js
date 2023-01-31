// 약수 구하기
// 정수 n이 매개변수로 주어지는 함수 solution
// 정수 n의 약수를 오름차순으로 정렬한 배열 출력

function solution (num) {
    let result = []

    for (let i = 1; i <= num; i++){
        if (num % i === 0) result.push(i)
    }

    return result
}

console.log(solution(24))
// [1, 2, 3, 4, 6, 8, 12, 24] 출력