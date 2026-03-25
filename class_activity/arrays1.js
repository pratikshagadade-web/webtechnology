const arr1 = ["sanjana", "sakshi", "swaliya", "sanika"];
const arr2 = ["shweta", "rasika", "priyanka"];
arr1.push(arr2);
console.log(arr1);
console.log(arr1[3]);
console.log(arr1[3][2]);

//Array Concat
const arr3 = arr1.concat(arr2);
console.log(arr3);

const arr4 = [1, 2, 3, [4, 5, 6], 7,[6, 7, [4,5]]];//Nested array:- array within another array...
console.log(arr4);
//flat :- how been a nested array should be flatted ...default value is 1
//flat does not change original array it returns new array useful when working with nested data...
const arr5 = arr4.flat(Infinity);//flattens all levels no matter how many
console.log(arr5);
const arr6 = arr4.flat(1);
console.log(arr6);

//data scripting using these methods
console.log(Array.isArray("sanjana"));//check given array is array or not...
console.log(Array.isArray(arr4));
console.log(Array.from("sanjana"));//converts an iteratable objects like string, set, map into an array...
console.log(Array.from({name : "sanjana"}));
console.log(Object.keys({name : "sanjana"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));//create new array from given values no matters how many values...
//difference between Array.of and Array.from...
//Array.of :- converts value...
//Array.from :- converts interable to string, map...
//Assignment array, string, object, function...

