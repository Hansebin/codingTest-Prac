// 정수 배열을 매개변수로 받는 함수
// 정수 배열의 평균값을 return하는 함수 solution

function solution(num){
    let result = 0
    for (let i = 0; i < num.length; i++){
        // 인덱스 번호 0부터 배열의 개수 전까지
        result += num[i]
        // result = result + num[i] -> 배열이기 때문에 인덱스 번호로 표기해줘야 한다.
    }
    result = result / num.length
    // 배열 안의 수들을 모두 더한 다음에 배열 길이로 나누기 = 평균
    return result
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))