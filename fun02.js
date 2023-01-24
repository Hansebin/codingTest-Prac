// 년, 월, 일을 표시하면 함수 Date
// 년 월 일을 모두 매개변수로 받게 되면 -> 년 / 월 / 일로 출력
// 년 월만 매개변수로 받게 되면 -> 년 월로 출력
// 년만 매개변수로 받게 되면 -> 년 출력

// if문의 범위 판단 = 범위가 작은 것부터 큰 것으로

function Date(year, month, day){
    if (year, month, day) return `${year} / ${month} / ${day}`
    else if (year, month) return `${year}년 ${month}월`
    else if (year) return `${year}년`
}

console.log(Date(2023,12,1))