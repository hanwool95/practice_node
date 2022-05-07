//
// const findMax = (number, remain) => {
//     if (remain === 0) {
//         return parseInt(number)
//     }
//
//     let numberList = []
//
//     for (let i = 0; i < number.length; i += 1) {
//         numberList.push(findMax(number.substr(0, i)+number.substr(i+1), remain - 1));
//     }
//     return Math.max(...numberList)
//
// }
//
//
// function solution(number, k) {
//     let result = findMax(number, k)
//     console.log(result)
//     return String(result)
// }
//
//
//
//
//
//
// solution("1924", 2)	// "94"
// solution("1231234", 3)	//"3234"
// solution("4177252841", 4)	//"775841"


function solution(number, k) {
    let stack = []
    let count = 0

    for (const digit of number) {
        while (count < k && stack[stack.length-1] < digit){
            stack.pop()
            count += 1
        }
        stack.push(digit)
    }


    while (count < k ) {
        stack.pop()
        k -= 1
    }

    return stack.reduce((prev, cur) => prev + cur)
}


solution("1924", 2)	// "94"
solution("1231234", 3)	//"3234"
solution("4177252841", 4)	//"775841"
solution("12345", 2)	//"775841"
solution("54321", 2)	//"775841"
solution("453", 2)	//"775841"
