// const num1=10;
// const num1=20;
// console.log(num1);

let num2 = 2;
var num3 =3;
{

    let num2 = 20;
    var num3 = 30;
    console.log(num2,num3);
    document.writeln(num2,num3);
}
 console.log(num2,num3);
 document.writeln(num2,num3);
//activity no.1
//display student information

let name="pratiksha";
let prn = "23UAM030";
let email_id="pratikshagadade2005@gmail.com";
 
console.log(name,
    prn,
    email_id
);
document.writeln(name,prn,email_id);

//activity no 2 = check if the number is even or odd
 let num=7;
 if(num % 2 ==0){
    console.log("the number is a even number");
    document.writeln("the number is a even number");
  }
 else
    console.log("the number is a odd number");
    document.writeln("the number is a odd number");

//activity no.3 check if the student is pass or fail

let marks=60;
if(marks>=35){
    console.log("The student is pass");
    document.writeln("the student is pass");
}
else
    console.log("The student is fail");
    document.writeln("the student is fail");
//activity no.4 print numbers

for(let i=1;i<=10;i++){
    console.log(i);
    document.writeln(i);
}

//activity no.5

let a=10;
let y=a;
 a=2001;

console.log(a,y);
document.writeln(a,y);