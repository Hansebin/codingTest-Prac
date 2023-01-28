// n의 배수 고르기
// 정수 하나와 정수 배열을 매개변수로 받는 함수 solution
// 정수 배열에서 정수의 배수들만 배열로 담아 출력

function solution (num, array) {
    let result = []

    for (let i = 0; i < array.length; i++){
        if (array[i] % num === 0) result.push(array[i])
    }

    return result
}

console.log(solution(12, [2, 100, 120, 600, 12, 12]))


// filter 함수 이해하기!!
// 조건으로 요소륻을 걸러서 반환
// function solution (num, numbers) {
//     return numbers.filter(number => numbers % num === 0)
// }
