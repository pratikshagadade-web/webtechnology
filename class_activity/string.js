let str1 = "Priyanka";
console.log(str1);
console.log(typeof(str1));


//string interpolition
console.log(`Hello my name is ${str1}`);

let fname = "rob";
console.log(`${fname}`);

//why we use new keyword
const gameCount = new String("Priyanka");
console.log(gameCount.length);
console.log(gameCount.toLowerCase());
console.log(gameCount.charAt(2));
console.log(gameCount.indexOf('i'));

//activity
//check all methods/function

//1.toUpperCase()
console.log(gameCount.toUpperCase());

//2.slice()
console.log(gameCount.slice(0,4));

//3.repeat()
console.log(gameCount.repeat(3));

//4.include()
console.log(gameCount.includes('yan'));

//5.trim()
let str2 = "   Hello World   ";
console.log(str2.trim());

//6.substring()
console.log(gameCount.substring(0,5));

//7.stratswith() and ensdswith()
console.log(gameCount.startsWith('Pri'));
console.log(gameCount.endsWith('nka'));

//8.replace
console.log(gameCount.replace('Priyanka','Ingale'));
