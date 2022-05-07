function solution(s){
    var answer = true;

    stackArray = []

    for (const bracket of s) {
        if (bracket === "(") {
            stackArray.push(bracket);
        }
        else {
            if (stackArray.length > 0){
                stackArray.pop()
            }
            else{
                answer = false;
                break;
            }
        }
    }

     if (stackArray.length > 0){
         answer = false;
            }

    console.log(answer)
    return answer;
}







solution("()()")	// true
solution("(())()")	// true
solution(")()(")	//false
solution("(()(")	//false