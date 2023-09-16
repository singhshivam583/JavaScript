// Memory : stack(primitive), heap (non primitive)

// let myYoutubename="ShivamSingh"
// let anotherName=myYoutubename
// anotherName="shivam"

// console.log(anotherName);
// console.log(myYoutubename);

let userOne={
    email:"shivamsingh175503@gmail.com",
    upiId:"shivam@paytm"
}

let userTwo=userOne

userTwo.email="shivam@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
