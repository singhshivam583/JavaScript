class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)                              // in classes we use super instead of call function
        this.emai = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}
const teacher=new Teacher("chai", "chai@fb.com", "123")
console.log(teacher)
teacher.addCourse()
teacher.logMe()

const newTeacher = new User("masalaChai")
// newTeacher.addCourse()                       // addcourse is not a function of user
newTeacher.logMe()

console.log(teacher instanceof Teacher);       
console.log(teacher instanceof User);       