const animal = ['dog', 'cat', 'a', 'bc', 'de'];

// 분해 할
let [first, second] = animal;

// console.log(first);
// console.log(second);

// 배열 내장 함수

// forEach: 빠르게 for문 생성
animal.forEach(x => console.log(x));

// find: 조건에 맞는 값 반환
result = animal.find(x => x[0] = 'd');
// console.log(result);


// indexOf: 원소의 인덱스 반환
result = animal.indexOf('cat');
// console.log(result);


// filter: 조건에 맞는 배열 생성
result = animal.filter(x => x.length > 1);
// console.log(result);


// findIndex: 안에 함수를 사용하여 원하는 인덱스 반환. 파라미터안에는 콜백함수 순서로 element, index, array. array는 본인 자체를 불러옴.
result = animal.findIndex((element, index, array) => {
    return element.length > 1 || array[0]
});
// console.log(result);


// splice: 시작점에서 몇개의 index를 없앨지 정해준 뒤, 반환 값에는 제거된 배열, 원래 배열은 그 값이 사라짐
start = 1;
delete_num = 2;
// result = animal.splice(start, delete_num);
// console.log(result);
// console.log(animal);
//

// slice: begin부터 end 전까지 새로운 배열 생성.
begin = 2;
end = 4;
result = animal.slice(begin, end);
// console.log(result);


// shift: 첫 요소 반환 후 제거
// result = animal.shift()
// console.log(result)
// console.log(animal)
//
// // pop: 마지막 요소 제거 후 반혼
// result = animal.pop()
// console.log(result)
// console.log(animal)


// unshift: 맨 앞에 추가
animal.unshift('first_thing')
// console.log(animal)

// join: 안에 있는 것을 중심으로 배열을 하나의 문자열로 합침.
result = animal.join(' 띄고 ')
// console.log(result)


// concat: 배열을 안에 있는 배열과 합침
new_animal = ['lion', 'tiger']
let new_array = animal.concat(new_animal)
// console.log(new_array)


// map: 함수 안에 요소들 동작 뒤 새로운 배열 반환
let new_array2 = animal.map(x => x+"new");
// console.log(new_array2);

// reduce: reduce 함수를 모두 실행하여 값 반환.
const reducer = (previousValue, currentValue) => previousValue + currentValue;
// console.log(animal.reduce(reducer));





