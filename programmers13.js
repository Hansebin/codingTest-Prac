// 최댓값 만들기
// 정수 배열이 매개변수
// 배열의 원소 중에서 2개를 곱해서 만들 수 있는 최댓값을 출력 -> 가장 큰 수 2개 선택해서 곱하면 끝!

function solution(array){
    let result = 0
    let FirstLarge = 0
    let SecondLarge = 0
    // 1번째로 큰 수와 2번째로 큰 수를 담는 변수 생성

    for (let i = 0; i < array.length; i++){
        if (array[i] > FirstLarge) FirstLarge = array[i]
        // 가장 큰 수 찾아서 변수에 대입
    }
    array.splice(array.indexOf(FirstLarge), 1)
    // 가장 큰 수는 기존 배열에서 삭제 -> 2번째로 큰 수를 찾아야 하기 때문에

    for (let j = 0; j < array.length; j++){
        if (array[j] > SecondLarge) SecondLarge = array[j]
        // 가장 큰 수가 삭제된 배열에서 가장 큰 수(처음 배열 기준으로 2번째로 큰 수) 찾기
    }

    result = FirstLarge * SecondLarge
    // 1번째로 큰 수 * 2번째로 큰 수
    return result
}

console.log(solution([0, 31, 24, 10, 1, 9]))