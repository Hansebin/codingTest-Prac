// A보다 키가 큰 사람의 수를 출력하는 함수
// 정수 배열과 정수를 매개변수로 받는 함수
// 매개변수로 받은 배열에서 매개변수 정수보다 큰 수가 있다면 +1해서 결과 출력하는 함수 solution

function solution(num_list, num){
    let result = 0

    for (let i = 0; i < num_list.length; i++){
        if (num_list[i] > num) result += 1
        // 배열을 하나씩 돌려서 정수와 비교 -> 만약 정수보다 크면 +1을 해준다.
    }

    return result
}

console.log(solution([180, 120, 140], 190))