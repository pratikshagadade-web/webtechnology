//fetch is an js method used to make http request
//fetch method returns promises

//syntax   =fetch('url')

// fetch("https://Jsonplaceholder.typiCode.com/users")
// .then((response)=>{return response.json()})
// .then((data)=>{console.log(data)})
// .catch((error)=>{console.log(error)});

fetch("https://Jsonplaceholder.typiCode.com/users/5")
.then((response)=>{return response.json()})
.then((data)=>{console.log(data)})
.catch((error)=>{console.log(error)});

//activity sync await exam with fetch method
//3. fetch user desplay name in html list
//fetcgh post show obnly first 5 
//crete a fake promise maunally reslove and reject after 3 sec.
//what is promise in js and states
// what is fetch methiod 
// wgat does fetch return
// why do we use response.js'
// diff betw ayn await
// what is promisechain.