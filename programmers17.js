// 중복된 숫자의 개수 판단
// 정수가 담긴 배열과 특정 숫자를 매개변수로 받는 함수 solution
// 정수가 담긴 배열에 특정 숫자가 몇 개 있는지 개수를 판단하여 결과값을 출력

function solution(array, num){
    let result = 0

    for (let i = 0; i < array.length; i++){
        // 배열을 반복문으로 돌려 배열 안의 정수를 하나씩 꺼내온다.
        if (array[i] == num) result++
        // 꺼내온 정수와 num이 같다면 result에 1씩 더한다.
    }

    return result
}

console.log(solution([0, 1, 1, 2, 3, 4, 4, 4], 5))