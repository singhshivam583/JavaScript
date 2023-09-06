const user ={
    username: "shivam",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
    //    console.log("got user details from data base");
    //    console.log(`Username: ${this.username}`);
    //    return "got user details from data base";
        console.log(this);

   }
}
// console.log(this);
// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

// const userOne = User("shivam singh", 10, true)
// const userTwo= User("shivam", 5, false)
// console.log(userOne);                           // usertwo overwrite userone 

const userOne =new User("shivam singh", 10, true)    // new is constructor which is used to create new instance without overwritting previous instance
const userTwo=new User("shivam", 5, false)
console.log(userOne);  
console.log(userTwo);
console.log(userTwo.username);
console.log(userTwo.constructor);                     // constructor is a reference to itself 
console.log(userTwo instanceof User)


