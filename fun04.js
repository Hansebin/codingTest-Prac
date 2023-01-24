// 특정 돈을 지폐와 동전으로 계산해주는 계산기
// 50000, 10000, 5000, 1000, 500, 100, 10의 지폐와 동전으로 특정 돈을 계산

let arr = [50000, 10000, 5000, 1000, 500, 100, 10]
// 돈 단위 배열에 넣어놓기 -> for문으로 돌리기 위해

function calculator (money){
    console.log(`< Money Calculator >`)
    console.log(`------- ${money}원 -------`)
    // 구분하기 쉽게 출력물 만들기(필수는 X)

    for (let i = 0; i < arr.length; i++){
        let num = Math.floor(money / arr[i])
        // Math.floor은 숫자의 소수점 이하를 버리는 자바스크립트 함수
        // 2.34553 -> 소수점 이하를 버려서 2만 남도록
        console.log(`${arr[i]} X ${num}`)

        money -= arr[i] * num
        // money에서 돈 단위 * 몫 만큼 빼서 남은 금액으로 다시 나눌 수 있도록 한다.
    }
}

calculator(74030)