const user={
    username:"shivam",
    price: 999,

    welcomeMessage: function(){
        console.log(`Welcome to the store ${this.username}`);
        console.log(this);                                       // this points to the  current context
    }
}

// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()

// console.log(this);                   // global object on browser is window

// function chai(){
//     let username="shivam"
//     console.log(this);
//     console.log(this.username);             // this only works on objects  
// }
// chai();

// const chai=function(){
//     let username="shivam"
//     console.log(this);
//     console.log(this.username);        // again not working 'this'
// }
// chai();

const chai=()=>{                        // arrow functions
    let username="shivam"
    console.log(this);
    console.log(this.username);   
}
// chai();


// ()=>{}         // basic arrow functions

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(2,4));

// const addTwo=(num1,num2)=>(num1+num2)  // when use () then there is no need to return any value
// console.log(addTwo(2,4));

const addTwo=(num1,num2)=>({username:"shivam"})
console.log(addTwo(3,4));

// const myArr=[2, 4, 5, 6, 8]
// myArr.forEach(()=>{}) 

