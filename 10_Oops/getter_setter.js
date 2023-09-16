class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()+'@Gmail.com'
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password.toUpperCase()}Shivam`
    }

    set password(value){
        this._password = value
    }
}

const shivam = new User("shivam", "abc")
console.log(shivam.password);
console.log(shivam.email);
