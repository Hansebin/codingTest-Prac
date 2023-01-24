// 베열을 매개변수로 받는 해당 함수는 가장 큰 수를 찾는 함수다.
// 매개변수로 받은 특정 배열에서 가장 큰 값을 찾아 반환한다.
// arr = [2, 45, 12, 55] -> 55반환해서 출력

function findLarge (arr) {
    let large = 0
    // 가장 큰 값을 0으로 설정하고 시작

    for (let i = 0; i < arr.length; i++){
        if (arr[i] > large){
            large = arr[i]
            // 각각의 배열의 인덱스값을 for문으로 돌기
            // 특정 값이 기존 large 값보다 커지면 large값으로 업데이트
        }
    }
    return large
}

console.log(findLarge([23, 33, 21, 45, 54, 56]))