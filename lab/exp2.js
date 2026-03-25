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







