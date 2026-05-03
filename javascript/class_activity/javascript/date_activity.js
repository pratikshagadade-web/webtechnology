let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(Date.now());
console.log(Date.now() / 1000);
console.log(Math.floor(Date.now() / 1000)); // ✅ fixed

let newDate = new Date();

console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(newDate.getUTCDate());

console.log(newDate.toLocaleString('default', { weekday: "long" }));