//promises is an object that represent the future result of an asynchronous operation.
//simply i promise to give result later.
// real world example: zomato application.
//promises has 3 stages : 1.pending
                        //2.resolve(success)
//                         //3.reject

// let mypromise= new Promise((resolve,reject)=>{
//     if (success= true){
//         resolve("data fetch successfully");
//     }
//     else
//         reject("error");
// });     
// mypromise.then((result)=>{
//     console.log(result)
// }).catch((error)=>{});                  
  
//resolve-> success
//rejected ==error

//activity why promises is better then call back.

// const Promise2=new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//         console.log("async task completed");
//         resolve();

//      },3000);
// });
// Promise1.then(()=>{console.log("promise consume")});

const Promise3=new Promise((resolve,reject)=>{
     setTimeout(()=>{
       
        resolve({"user":"abc", "id": 30});

     },3000);
    });    

Promise3.then((user)=>{console.log(user)})    




//1.error 
//2.function promises
