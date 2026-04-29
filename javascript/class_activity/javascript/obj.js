// object literals
let myobj ={
    name:"pratiksha",
    age : 20,
    location : "sangli",
    email : "pratikshagadade@gamil.com",
    islogin: false,
    "full name":"pratiksha bhausaheb gadade",
    lastLoginDays : ["monday","tuesday","wednesday"],
   // [mysym]:"myKey1"

}
//object is key value pair
//two tyoes of object declaration
//1. object literal
//2.object constructoter
//3.singleton
//when u crate a constructor it creates a singleton object it means itself a object
//when object literal singleton is not created
console.log(myobj);
console.log(myobj["full name"]);



console.log(myobj)
//console.log(typeof(myobj.mysym));
//my symbol example

const mySym =Symbol("mykey");
const myobj2={
    [mySym]:"mykey"
};
console.log(typeof(myobj2));

myobj.email="pratiksha19@gamil.com";
console.log(myobj.email);

//Object.freeze(myobj);

myobj.email="pgadade@gamil.com";
console.log(myobj.email);

myobj.greeting = function(){
   console.log("hello js users");
}
console.log(myobj.greeting());


