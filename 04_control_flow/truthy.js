const userEmail="s@singh.ai"

if (userEmail) {
    console.log("Got your email");
}else{
    console.log("don't have user email");
}

// falsy values
// false ,0 , -0, Bigint 0n, "", null, undefined, NaN

// truthy values
// truth, "0", 'false', " ", [], {}, function(){}

// checking array is empty or not
// if (userEmail.length=== 0){
//     console.log("array is empty")
// }

// checking object is empty or not
const emptyObj={}
if (Object.keys(emptyObj).length===0) {
    // console.log("object is empty")
}

// Nullish Coalescing Operator(??): null undefined

let val1;
// val1=5 ?? 10
// val1= null ?? 10
// val1=undefined ?? 15
val1=null ?? 10 ?? 15
// console.log(val1)

// Terniary Operator

// condition ? true : false
const iceTeaPrice=100
iceTeaPrice<= 80 ? console.log("less than 80") : console.log("more than 80") 
