//function definition :- it is a block of code that execute multiple times when called

function add(num1, num2){
    let result = num1 + num2;
    return result;
    console.log("Hello JS");//after return statement the code will not execute
}

console.log(add(2, 3));

function userMessage(userName){
    if(userName === undefined){
        console.log(`Please enter username`);
    } 
    return `${userName} just login!;`
}
console.log(userMessage("pratiksha"));
//when string is empty output is undefined

function calculatePrice(...num1){//...spread operator or rest operator
    return num1;
}

console.log(calculatePrice(200,300,400));

const userName = {
    name : "pratiksha",
    age : 21
}
function handleObject(obj){
    console.log(`Username is ${obj.name}`);
    console.log(`Age is ${obj.age}`);

}
handleObject(userName);

const arr = [1,2,3,4,5];
function handleArray(a){
    console.log(`first Array elements is ${a[0]}`);
}                                                                   
console.log(handleArray);

//ARROW FUNCTION =>  () => {}
//this keyword used for inform current contex
function myFun(){
    let name = "pratiksha";
    console.log(this.name);
    //console.log(this);


}
const addition = () => {
    let username = "pratiksha"
    console.log(username);
    console.log(this.username);
    //console.log(this);


}
const myFun1 = () => {
    let userName = "pratiksha";
    console.log(this);

}
addition();
myFun();
myFun1();

const addNums = (num1, num2) => {
    return num1, num2;
}
console.log(addNums(2,3));

//Activities
//write code for arrow function with 2 examples;
const totalCalculate = (s1, s2, s3) => {
    let total = s1 + s2 + s3;
    return total;
}
console.log(totalCalculate(78,89,86));

const isVote = (age) => {
    if(age >= 18){
        console.log(`can Vote`);
    }
    else{
        console.log(`cannot Vote`);
    }
}
isVote(21);

//switch case code
console.log(`1.Addition`);
console.log(`2.Subtraction`);
console.log(`3.Multiplication`);
console.log(`4.Division`);

//let choice = prompt("Enter Your Choice :")
switch(1){
    case 1 :
        console.log(`3 + 2 =` + (3 + 2));
        break;
    case 2 :
        console.log(`5 - 3 = ` + 5 - 3);
}


//how to use truthy and falsy values with examples
//how to use ternary operators in javascript
//write a code for how to use loops in array
//for of and for in and all loops
//how to use map and filter function in javascript