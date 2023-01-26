// 배열 자르기
// 정수가 담긴 배열과 정수1, 정수2를 매개변수로 받는 함수
// 정수가 담긴 배열에서 정수1에서 정수2만큼을 잘라서 새로운 배열로 담아 출력하는 함수 solution

function solution(array, num1, num2){
    let result = []

    return result = array.slice(num1, num2+1)
}

console.log(solution([1, 2, 3, 4, 5], 1, 3))
// [2, 3, 4] 출력