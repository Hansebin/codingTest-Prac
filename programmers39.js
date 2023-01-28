// 가장 큰 수 찾기
// 정수 배열을 매개변수로 받는 함수 solution
// 정수 배열에서 가장 큰 수를 찾고 그 수의 인덱스를 함께 출력

function solution(numbers){
    let result = []
    let largeNum = 0

    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] > largeNum) largeNum = numbers[i]
    }
    result.push(largeNum, numbers.indexOf(largeNum))

    return result
}

console.log(solution([9, 10, 11, 8]))


// 참고할 표현
// let max = Math.max(...array);
// return [max, array.indexOf(max)]