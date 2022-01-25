

function add(a,b){
    return a+b;
}
console.log(add(3,4))


const arrow_add = (a,b) => {
    return a + b
}
console.log(arrow_add(3, 4))


const only_return_add = (a, b) => a + b;
console.log(only_return_add(3, 4))



// 화살표 function은 argument가 없음.
const func = function() {
    console.log(arguments);
}
func(1, 2, 3, 4)

// 하지만 ...으로 배열을 가져올 수 있음.
const arrow_func = (...word) => {
    console.log(word)
}
arrow_func(1,2,3,4)



// this의 차이.

let people = {
    name: 'gildong',
    say: function() {
        console.log(this);
    }
}

// people가 실행한 것이기에, people 그 자체를 return함
// { name: 'gildong', say: [Function: say] }
people.say();


// global에서 실행했기에 this는 global이 됨.
var SayPeople = people.say;
SayPeople();


// P를 따로 선언한 뒤에는 P를 반환.
let P = people;
P.say();


// bind를 사용해서 this로 묶고 싶은 함수가 있다면 묶을 수 있음.
var Bind_SayPeople = people.say.bind(people);
Bind_SayPeople()
