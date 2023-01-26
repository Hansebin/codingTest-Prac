// 삼각형의 완성조건 - 1
// 삼각형의 조건 = 가장 긴 변의 길이가 나머지 2변의 길이의 합보다 작아야한다.
// 정수 배열을 매개변수로 받는 함수 solution은 해당 정수 배열로 삼각형을 만들 수 있다면 1을 출력, 만들 수 없다면 2를 출력

function solution (array){
    let result = 0
    let large = 0
    let sum = 0

    for (let i = 0; i < array.length; i++){
        if (array[i] > large) large = array[i]
        // 배열에서 가장 큰 수 찾아서 large 변수에 저장
    }
    array.splice(array.indexOf(large), 1)
    // 가장 큰 수를 기존 배열에서 삭제 -> splice 사용!

    for (let j = 0; j < array.length; j ++){
        sum += array[j]
        // 가장 큰 숫자가 삭제된 배열의 모든 원소의 합 구하기
    }

    sum > large? result = 1 : result = 2
    // 모든 원소의 합과 가장 큰 숫자 비교!

    return result
}

console.log(solution([199, 72, 222]))