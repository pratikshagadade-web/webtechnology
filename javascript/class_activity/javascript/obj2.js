//singleton obj
const user =new Object();
console.log(user);
const user1 ={};
user1.id= 20;
user1.name ="pratiksha";
console.log(user1);


//object in object
const user2 ={
    email : "pratiksha2gamil.com",
    username : {
        fname: "pratiksha",
        lname: "gadade"
    }

}
console.log(user2);
user2.username.fname;
