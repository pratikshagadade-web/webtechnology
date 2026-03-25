const balance = new Number(100);
console.log(balance);//[Number: 100]
console.log(typeof(balance));//object
console.log(balance.toString())//100
console.log(balance.toFixed(2))//100.00 when we build ecomerce website and precision value is to long
console.log(balance.toString().length)

const h = 1000000;
console.log(h.toLocaleString());//by default us standard
console.log(h.toLocaleString('en-IN'));//it makes indian standard

//Math
console.log(Math);//Object [Math] {}
console.log(Math.abs(-4));//4 negative value converts to positive and positiveas it is
console.log(Math.round(4.6));//5
console.log(Math.ceil(4.6));//5 choose top values
console.log(Math.floor(4.6));//4 choose low values
console.log(Math.min(1,2,3));//1
console.log(Math.max(1,2,3));//2

//Activity 
//math.random()
console.log(Math.random());
//It generates a random decimal number range between 0 to 1.
