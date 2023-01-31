// 최댓값 만들기
// 정수 뱌열을 매개변수로 받는 함수 solution
// 원소 2개로 만들 수 있는 가장 큰 곱을 계산하여 출력

function solution (numbers) {
    let max = numbers[0] * numbers[1]
    // 비교할 변수 생성

    for (let i = 0; i < numbers.length - 1; i++){
        const first = numbers[i]
        // 1번째 값 생성

        for (let j = i + 1; j < numbers.length; j++){
            const second = numbers[j]
            // 2번째 값 생성

            if (max < first * second){
                max = first * second
            }
        }
    }
    
    return max
}

console.log(solution([1, 2, -3, 4, -5, -5]))

// 반복문 안에 또 반복문 -> 0번째와 1번째, 0번째와 2번째... 1번째와 2번쩨, 1번째와 3번째....
// 시작점을 큰 반복문으로 묶고 그 안은 시작점 +1로 해서 계속 돌린다
