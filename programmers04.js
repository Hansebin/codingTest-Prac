// 배열의 원소 길이를 출력하는 함수
// 문자열 배열이 매개변수로 주어진다.
// 각 원소의 길이를 담은 배열을 return하는 함수 solution

function solution(arr){
    let result = []
    // 빈 배열 생성
    for (let i = 0; i < arr.length; i++){
        // arr인덱스로 하나씩 돌리기
        result.push(arr[i].length)
        // arr안에 있는 문자열 하나씩 길이 체그 -> push로 배열 result에 넣기!
    }
    return result

}

console.log(solution(["We", "are", "the", "world!"]))