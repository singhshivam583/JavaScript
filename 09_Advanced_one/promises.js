// fetch("https://api.github.com/users/singhshivam583").then().catch().finally()

const promise1= new Promise(function(resolve, reject){
    // Co async task
    // DB calls , cryptography, network call 
    setTimeout(() => {
        console.log("async task is complete ");
        resolve()
    }, 1000);

})
promise1.then(function(){
    console.log("Promise Comsumed");
})

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async task 2")
        resolve()
    }, 1000);
}).then(()=>{
    console.log("async is resolved") 

})

const promise3=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({username:"shivam", email:"abc@gmail.com"})
    }, 1000);
}).then((user)=>{
    console.log(user)
})


const promise4=new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error=true
        if(!error){
            resolve({username:"shivam", password:"123"})
        }else{
            reject("ERROR: Async was rejecred")
        }
    }, 1000);
})

promise4.then((user)=>{
    console.log(user)
    return user.username
}).then((myusername) => {
    console.log(myusername);
}).catch((error) => {
    console.log(error)
}).finally(() => console.log("The Promise is either resolved or rejected"))



const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username:"javascript", password:"12345"})
        }else{
            reject("ERROR: Js went wrong")
        }      
    }, 1000);

})

async function consumePromise5(){
    try {
        const response = await promise5
        console.log(response);
    }
    catch (error) {
        console.log(error)
    }
}
consumePromise5()

// async function getAllUSer(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         // console.log(response)
//         const data= await response.json()         // it take time to convert into json file thats why await is used
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error)
//     }
// }
// getAllUSer()

fetch('https://api.github.com/users/singhshivam583')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)                   // response is stored in data
})                              
.catch((error) => console.log(error)) 


// here ,if we pass api link in a variable then it return at last when compile the program but we directly pass into fetch
// then it return first and then above program result returns

