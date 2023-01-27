// 모음 제거하기
// 문자열을 매개변수로 받는 함수 solution
// 문자열에서 모음만 제외하고 출력한다.

function solution (str) {
    let result = str
    // 매개변수 string를 result에 대입 -> 계속 업데이트가 되어야 하기 때문에
    let arr = ["a", "e", "i", "o", "u"]
    // 모음을 담은 배열 생성

     for (let i = 0; i < arr.length; i++){
        result = result.split(arr[i]).join("")
        // result를 모음 배열의 원소 하나하나로 자른 후에 join으로 합친다.
        // join함수는 배열 원소를 문자열로 합쳐주는 함수
    }

    return result
}

console.log(solution("bus"))