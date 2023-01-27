// 배열의 유사도
// 문자열 배열 2개가 매개변수로 받는 함수 solution은 두 배열의 동일한 문자의 개수를 세어 출력한다.

function solution (arr1, arr2) {
    let result = 0

    for (let i = 0; i < arr1.length; i++){
        for (let j = 0; j < arr2.length; j++){
            if (arr2[j] === arr1[i]) result++
        }
    }
    // 1배열과 2배열의 원소들을 하나씩 비교해야 하기 때문에 이중for문을 사용한다.
    // 1배열을 반복문으로 돌릴 때 그 안에서 2배열을 반복문으로 돌려 비교한다.
    // 원소가 서로 동일하면 +1

    return result
}

console.log(solution(["n", "omg"], ["m", "dot"]))