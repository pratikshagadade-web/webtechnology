//memory 
// there are two types of merrry



let myNewYtchannel="PBG";
let anotherytchannel=myNewYtchannel;
console.log(myNewYtchannel);
console.log(anotherytchannel);



//premitive datamemory are stored in stack memory, copy is made during assigning so it doesnt affect another memory

let user1={
    name:"pratiksha",
    id:67,
    age:20
}
let user2=user1;
user2.id=24;
console.log(user1.id);
console.log(user2.id);
//non permitive data types stoerd in heap memoery
// when we assign referenced is copied, if we chnge one both changes

