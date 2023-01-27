// 배열 2배로 만들기
// 정수 배열이 매개변수로 주어지는 함수 solution은 배열의 각 원소를 각각 2배로 만들어 결과값을 출력한다.

function solution (array) {
    let result = []

    for (let i = 0; i < array.length; i++){
        result.push(array[i]*2)
    }

    return result
}

console.log(solution([1, 2, 3, 4, 5]))
// [2, 4, 6, 8, 10]