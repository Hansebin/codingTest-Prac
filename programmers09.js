// 배열을 뒤집는 함수
// 정수가 담긴 배열을 매개변수로 받는 함수 solution은 들어온 배열을 뒤집어서 출력한다.

function solution (num_list){
    let result = []
    // 숫자를 담을 빈 배열 생성

    for (let i = num_list.length - 1; i >= 0; i--) {
        // 원래 반복문에서는 0부터 시작했다면 이번 문제에서는 기존 배열을 뒤집어 담아야 하기 때문에 끝 인덱스부터 시작!
        // 전체 배열 길이에서 1을 뺀 숫자를 시작으로 하나씩 줄어들어 0까지 반복문 돌리기
        result.push(num_list[i])
        // 거꾸로 돌아서 온 숫자들을 하나씩 빈 배열에 담기
    }
    return result
}


console.log(solution([1, 2, 3, 4, 5]))