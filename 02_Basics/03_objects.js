// singleton

// objects literals

const mySym=Symbol("key1")
const mySym1=Symbol("key2")

const User={
    name:'Shivam',
    "full name":"Shivam Singh",
    mySym: "mykey1",                       // here mySym is not treated as Symbol here all keys defined as strings 
    [mySym1]: "mykey2",                    // [] is used to define mySym1 as a Symbol
    age:20,                        
    location:"lucknow",
    email:"sivamsingh@gmail.com",
    isLoggedIn:false,
    lastDaylogin: ["monday", "tuesday", "friday"]
}

// console.log(User.age)
// console.log(User["email"])
// console.log(User["full name"])
// console.log(User.mySym)
// console.log(User[mySym1])

// User.email="shivam@gmail.com"
// User.age=18
// console.log(User["email"])
// console.log(User["age"])

// Object.freeze(User)
// User.email="shivam123@gmail.com"
// User.age=21
// console.log(User["email"])
// console.log(User["age"])
// console.log(User)

User.greeting=function(){
    console.log(`Hello Shivam`)
}

User.greeting1=function(){
    console.log(`Hello Js User, ${this.name}`)
}

console.log(User.greeting)
console.log(User.greeting())   

console.log(User.greeting1)
console.log(User.greeting1())
       
console.log(User)





