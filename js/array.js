'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // 없는 값이라 undefined
console.log(fruits[fruits.length - 1]);

console.clear();
// 3. Looping over an array
// print all fruits

// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit)) 

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('🍓', '🍑')
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('🍓', '🍑')
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// remove an item by index position
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(1, 1); // (시작 인덱스, 종료 인덱스) 종료 인덱스 미지정시 시작인덱스부터 전부 지움
console.log(fruits);
fruits.splice(1, 1, '🍏', '🍉'); // 1번 인덱스부터 1개 지우고 그 자리에 청사과랑 수박을 넣음
console.log(fruits);

// combine two arrays
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index / 배열 안에 어떤 값이 몇번째 인덱스에 있는지 알 수 있다.
  console.clear();
  console.log(fruits);
  console.log(fruits.indexOf('🍎'));
  console.log(fruits.indexOf('🍉'));
  console.log(fruits.indexOf('🥥')); // 배열안에 해당하는 값이 없을 땐 -1이 출력됨

  // includes: 배열안에 수박이 있는지 없는지 알 수 있다(true/false로 return)
  console.log(fruits.includes('🍉')); // 배열에 수박이 있는지 없는지 true/false로 return한다
  console.log(fruits.includes('🥥')); // 가지고 있지 않는 데이터는 false

  // lastIndexOf
  console.clear();
  fruits.push('🍎');
  console.log(fruits);
  console.log(fruits.indexOf('🍎')); // 제일 첫 번째로 해당하는 값을 만나면 그 값이 들어있는 인덱스를 return함
  console.log(fruits.lastIndexOf('🍎')); // 제일 마지막에 들어있는 값을 return함
  
