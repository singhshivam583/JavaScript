let myName = "shivam     "

// console.log(`True length of string is ${myName.trim().length}`);

// making method to get actual length of string

let myHeros = ["Thor", "Spiderman"]


let heroPower = {
    Thor: "Hammer",
    Spiderman : "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.Spiderman}`)
    }
}

Object.prototype.Shivam = function(){                    //in js all the things revolving arround object. so , when  prototype new function u can access Shivam() everywhere u want like array, string , objects          
    console.log(`shivam is present in all objects`); 
}

Array.prototype.heyshivam = function(){                // only works on array 
    console.log(`Shivam says Hello`)
}

// heroPower.Shivam()                           
// myHeros.Shivam()

// heroPower.heyshivam()                                // only works on arrays
// myHeros.heyshivam()


//  Inheritance

const User={
    username: 'shivam',
    email: 'shivam@google.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport ={ 
    makeAssingment : "js assignment",
    fulltime : true,
    __proto__: TeachingSupport                      // prototypal inheritance 
}

Teacher.__proto__ = User
console.log(Teacher.username);

// modern syntax 
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "ChaiAurCode    "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
}