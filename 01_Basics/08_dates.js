const myDate=new Date()
console.log(myDate.toDateString())
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toLocaleDateString())

// console.log(typeof myDate) //object

// let myCreatedDate=new Date(2023,0,22)   // months are start with 0 in js
// let myCreatedDate=new Date(2023,0,22,5,3,4)
// let myCreatedDate=new Date("2023-01-14")   // here month start with 1 
let myCreatedDate=new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp=Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));     // in sec 

let newDate=new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday:"short"
}));


