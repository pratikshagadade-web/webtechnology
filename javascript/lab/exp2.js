//1 create an array function and object and print;
//2. reverse number
//3. pallindrom
//4.fibbonacci series
//5.largest number
//6. missing no. in the array
//7. reverse a strimg
//9. count vowels in string
//10 check pallindrome in string
//11 check prime number
//12 function to even or add
//13 function to find sum of array
//14 funct to find sum of array

//array
let name=["pratiksha","shweta","priyanka"];
console.log("student names: "+ name);

//function
function sum(a,b){
    return a+b;
}
console.log("sum of numbers:"+sum(2,4));

let student={
    name:"pratiksha",
    age: 34

}
console.log(student);


//activity no.2 reverse a number
function reverseNumber(num) {
  let rev = 0;

  while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return rev;
}

console.log(reverseNumber(123)); // 321

//activity 3 pallindrom
function isPalindrome(num) {
  let original = num;
  let reverse = 0;

  while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
  }

  return original === reverse;
}

// Example
console.log(isPalindrome(121));  // true
console.log(isPalindrome(456));  // false

//activity no.4 fibonacci series
function fibonacci(n) {
  let a = 0, b = 1, next;

  console.log(a);
  console.log(b);

  for (let i = 2; i < n; i++) {
    next = a + b;
    console.log(next);
    a = b;
    b = next;
  }
}

fibonacci(10);

//  activity no 5. largest no.1
console.log(`Activity 7`);

let arr2 = [1,5,7,8,3,5,2,3,1];
let max = Math.max(...arr2);//...spread operator => It spreads array elements into individual values.
console.log(`Largest Number is : ${max}`);

//Activity 8 :
//remove duplicate element in array.
console.log(`Activity 8`);

let unniqueArray = [];
for (i = 1; i < arr2.length; i++){
    if(!unniqueArray.includes(arr2[i])){
        unniqueArray.push(arr2[i]);
    }
}
console.log(unniqueArray);

//Activity 9 :
//find missing no in array.
console.log(`Activity 9`);

function findMissingNumber(arr) {
    let n = arr.length + 1; // because one number is missing
    let expectedSum = 0;
    let actualSum = 0;

    for (let i = 1; i <= n; i++) {
        expectedSum += i;
    }

    for (let j = 0; j < arr.length; j++) {
        actualSum += arr[j];
    }

    let missingNumber = expectedSum - actualSum;
    console.log("Missing number is:", missingNumber);
}

let arr = [1, 2, 3, 5];
findMissingNumber(arr);


//Activity 10 :
//function to find even or odd.
console.log(`Activity 10`);

function evenOdd(value){
    if(value % 2 ==0){
        console.log(`${value} is Even`);
    }
    else{
        console.log(`${value} is Odd`);

    }
}
let value = 6;
evenOdd(value);

//Actiity 11 : 
//function to find sum of array.
console.log(`Activity 11`);

function sum(arr3){
    let sum = 0;
    for(let j = 0; j < arr3.length; j++){
        sum = sum + arr3[j];
    }
    console.log(`Sum of Array is : ${sum}`);
}
let arr3 = [1,2,3,4,5];
sum(arr3);










