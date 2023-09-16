// const tinderUser=new Object()   // singleton object

const tinderUser={} 

tinderUser.Name="abcd"
tinderUser.id=123
tinderUser.email="abc@gmail.com"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regulrUser={
    email:"shivam@gmai.com",
    fullname:{
        userFullname:{
            firstName: "Shivam",
            lastName:  'Singh'
        }
    }
}

// console.log(regulrUser.fullname.userFullname.firstName);

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}

// const newObj={obj1, obj2}
// const newObj=Object.assign({}, obj1, obj2)
const newObj={...obj1, ...obj2}   //spread
// console.log(newObj);

const users=[
    {
        id:1,
        email:"abhf@gmail.com"
    },
    {
        id:1,
        email:"abhf@gmail.com"
    },
    {
        id:1,
        email:"abhf@gmail.com"
    },
    {
        id:1,
        email:"abhf@gmail.com"
    },
    {

    }
]

console.log(users[1].email)

// console.log(tinderUser)

console.log(Object.keys(tinderUser));       // datatype array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));       // each key value pair is seperated in distinct array
console.log(tinderUser.hasOwnProperty("Name"));    // checking key is present in the object or not




