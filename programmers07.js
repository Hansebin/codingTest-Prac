// 짝수와 홀수 개수 계산 함수
// 숫자를 담은 배열에서 짝수와 홀수 개수를 계산하여 배열로 다시 출력하는 함수 solution
// [2, 4, 5, 6, 7] -> 짝수 3개 + 홀수 2개 = 결과값 출력 [3, 2]

function solution (num_list){
    let result = []
    let even = 0
    let odd = 0
    // 짝수와 홀수의 개수를 담는 변수 생성

    for (let i = 0; i < num_list.length; i++){
        num_list[i] % 2 === 0? even++ : odd++
        // 만약 num_list[i]번째 숫자가 2로 나누었을 때 나머지가 0이라면 짝수이기 때문에 even 하나씩 증가
        // 만약 나머지가 0이 아니라면 odd 하나씩 증가
    }
    result.push(even, odd)
    // 개수를 담은 변수를 하나씩 빈 result 배열에 추가
    return result
}

console.log(solution([1, 2, 3, 4, 5]))