//stack and queue
//Stack :- stack used for primitive data types.
//Queue :- used for non-primitive data types.

let myYtName = "smk";
let NewMyYtName = myYtName;
console.log(myYtName);
console.log(NewMyYtName);
NewMyYtName = "JS";

//Stack memory used for primitive data types like string number
//it means copy of value is given
// when we assign one variable to another a copy is made so changing one does not affect to others.
//heap memory used for non-primitive data types like obect, array, function.
//reference is given 
//ex :-
let user1 = {
    fname : "smk",
    age : 21,
    id : 7
}
let user2 = user1;
user2.id = 2;
console.log(user2.id);
//objects are stored in heap memory
//when we assign one object to another variable reference is copied not the value.
//if we change one both variables see the changes.
