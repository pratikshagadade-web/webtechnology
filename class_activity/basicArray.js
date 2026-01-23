//Lecture 4-> 21 jan 2026

//Array
let myarr = [0, 1, 2, 3, 4, 5];
console.log(`myarr : ${myarr}`);
console.log(typeof(myarr));

const arr = new Array(0,1,2);
console.log(arr[1]);

//array methods
arr.push(4);
console.log(arr);//add values in array

arr.pop();
console.log(arr);//remove last value from array

arr.unshift(7);
console.log(arr);//add value at beginning. It shifts all elements to right

console.log(arr.shift());//removes first element and shifts all elements to left
console.log(arr);

console.log(arr.includes(7));//checks whether 7 is present in array or not

console.log(arr.includes(1));//checks whether 1 is present in array or not

console.log(arr.indexOf(1));//gives index of 2


const superheroes = ["Ironman", "Spiderman", "Hulk", "Thor"];
const movies = ["DDLJ", "HSSH", "HAHK"];

superheroes.push(movies);
console.log(superheroes);
console.log(superheroes[3]);
console.log(superheroes[4][2]);

//array concat
superheroes.concat(movies);
console.log(superheroes);

const numbers = [1,2,3,[4,5,6],7,[6,7,[4,5]]];//nested array
console.log(numbers);

const array1 = numbers.flat(Infinity);//flattens all levels no matters how it would be
console.log(array1)

const array2 = numbers.flat(1);//how deep a nested array should be flattened. default value is 1.
console.log(array2)

//flat does not change original array. it returns new array useful when working with nested data.

//Data scripting using this method
console.log(Array.isArray("Priyanka"))//check the given is array or not.we can not use string as an array so it becomes flase.

console.log(Array.isArray(numbers));//numbers is an array

console.log(Array.from("priyanka"));//it separates the every letter.
//converts string ,map, array into separate

console.log(Array.from({name : "Priyanka"}));

// console.log(Object.keys())

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3))//create new array from given value. 
// diff bet array.of converts iterable into array and new Array() creates empty array of given length.
//array.from use to convert iterable to array like string,map etc.







