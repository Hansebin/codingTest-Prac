// 중앙값 구하기
// 정수가 담긴 배열을 매개변수로 받는 함수 solution
// 정수가 담긴 배열을 크기 순서대로 정렬했을 때의 중앙값을 찾아 출력한다.

function solution (array) {
    let result = 0

    array.sort(function(a, b) {
        return a - b
    })
    // 그냥 sort만 사용하게 될 경우 sort함수는 비교하는 숫자들을 문자로 인식하여 정렬하기 때문에 숫자식의 오름차순으로 정렬이 되지 않는다.
    // 따라서 sort안에 함수를 넣어 다시 비교를 한 후에 정렬을 하도록 한다. -> 더 공부 해보기!

    return result = array[Math.floor(array.length / 2)]
}

console.log(solution([9, -1, 0]))
// 7 출력