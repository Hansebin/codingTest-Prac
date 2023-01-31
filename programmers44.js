// 숫자 찾기
// 정수 num과 k를 매개변수로 주어지는 함수 solution
// 정수 num을 이루는 수들 중에서 k가 있다면 숫자가 있는 자리수를 출력, 없다면 -1 출력
// 숫자가 중복으로 존재한다면 첫번째로 등장하는 인덱스 번호 출력

function solution(num, k){
    let result = 0;

    num = String(num);

    for (let i = 0; i < num.length; i++){
        if (num[i] == k){
            result = i + 1;
            // 길이 기준으로 결과 출력 -> 1번으로 시작할 수 있도록
            break; 
            // 같은 수를 찾으면 결과를 대입하고 바로 끝낼 수 있도록!
        } else {
            result = -1;
        }
    }

    return result
}

console.log(solution(123456, 7))
// 3출력