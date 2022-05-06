const factorial_array = Array
    .from(new Array(10), (asdf, k) => k + 5)
console.log(factorial_array)
// [5,  6,  7,  8,  9, 10, 11, 12, 13, 14]

const sumby_array = Array
    .from(new Array(5), (asdf, k) => k + 5)
    .reduce((acc, cur) => acc + cur, 5)
console.log(sumby_array)
// 40

let sumby_for = 5;
for (let i = 5; i < 10; i += 1) {
    sumby_for += i;
}
console.log(sumby_for)
// 40


const names = ['a', 'b', 'c', 'a', 'b']
const uniqueNamesWithArrayFrom = Array.from(new Set(names));
console.log(uniqueNamesWithArrayFrom)
// [ 'a', 'b', 'c' ]
const uniqueNamesWithSpread = [...new Set(names)];
console.log(uniqueNamesWithSpread)
// [ 'a', 'b', 'c' ]


const person = {
    name: 'Kim Han-wool',
    familyName: 'Kim',
    givenName: 'Han-wool'
};

const company = {
    name: 'SNU',
    address: 'Seoul'
};

const KimHanWool = { ...person, ...company};
console.log(KimHanWool)
// {
//   name: 'SNU',
//   familyName: 'Kim',
//   givenName: 'Han-wool',
//   address: 'Seoul'
// }


// || 로 Null 일 때 선언. Or니깐 아니면 이것.
let participantName = null
const name = participantName || 'Hanwool';

console.log(name)

// Flag가 True일 경우 함수 작동. And니깐 이거면 이것.
let flag = true;
let flag_func = (a) => {
    console.log(a)
}
flag && flag_func('hi');


const makeCmpany = (showAddress) => {
    return {
        type: 'Company',
        ...showAddress && { address: 'Seoul'}
    }
};
console.log(makeCmpany(false));
// { type: 'Company' }
console.log(makeCmpany(true));
// { type: 'Company', address: 'Seoul' }

// 오브젝트에서 필요한 것만 꺼내 쓸 수 있음.
const { familyName, givenName, address } = KimHanWool;
console.log(familyName)
console.log(givenName)
console.log(address)


// 키를 변수 이름으로 생략 가능.
const nameKey = 'Kim Han-Wool';
const hobbyKey = 'Soccer';
const hisObj = {
    nameKey,
    hobbyKey
}
console.log(hisObj)
// { nameKey: 'Kim Han-Wool', hobbyKey: 'Soccer' }



// 함수를 사용하여 할동도 가능.
const makeGroup = ({ groupNum, type, works }) => {
    return {
        groupNum,
        type,
        works
    }
};
const firstGroup = makeGroup({ groupNum : 12, type : 'Hanwool', works : 'student'});
console.log(firstGroup)
// { groupNum: 12, type: 'Hanwool', works: 'student' }


// Array형태로 key를 감싸면 동적으로 할당도 가능.
const numberKey = 0;
const mailKey = 'email';
const mailBox = {
    [numberKey]: 14,
    [mailKey]: 'hanwool95@snu.ac.kr'
};
console.log(mailBox);
// { '0': 14, email: 'hanwool95@snu.ac.kr' }


// !!를 이용해서 빈 값 여부를 확인할 수 있음. python에서는 생략되던 것을 여기서는 !!해야 함.
function checkTrue(checked) {
    if (!!checked) {
        return(checked);
    }
    else {
        return('wrong!');
    }
}
console.log(checkTrue(null));   // wrong!
console.log(checkTrue(1.0));    // 1
console.log(checkTrue(0));      // wrong!
console.log(checkTrue('alphabet'))  // alphabet
console.log(checkTrue(''))      // wrong!
console.log(checkTrue(NaN));            // wrong!


