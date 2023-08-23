function myName(){
    console.log("Shivam Singh")
}
// myName()

function addNum(num1, num2){

    console.log(num1+num2);

}

// const result=addNum(5,7)
// console.log("Result:", result)

function addNum1(num1, num2){

    // let sum=num1+num2;
    // return sum
    return num1+num2
}

const result1=addNum1(5,8)
// console.log("Result:", result1)

function logInUser(username){
    if(username===undefined){
        console.log("Enter Your UseName");
        return;
    }
    return `${username} just logged in`;
}
// console.log(logInUser("shivam"));
// console.log(logInUser());

// function calculateCartPrice(...num1){           // ... here it is a rest operator 
//     return num1;

// }
// console.log(calculateCartPrice(200, 300, 400))

function calculateCartPrice(val1, val2, ...num1){           // ... here it is a rest operator 
    return num1;

}
// console.log(calculateCartPrice(200, 300, 400, 500))    

// passing object as parameter in function
const user={
    username:"shivam",
    price:199
}
 function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
 }
//  handleObject(user)

//  handleObject({
//     username:"singh",
//     price:499
//  })

//  passing array as a parameter 
const myNewArr=[100, 200, 400, 500]

function returnSecondValue(getArr){
    return getArr[1]
}
// console.log(returnSecondValue(myNewArr))
// console.log(returnSecondValue([100,300,400,600]))





