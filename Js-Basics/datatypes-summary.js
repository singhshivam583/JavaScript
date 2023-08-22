// Primitive
// types : string, boolean, Number, null, undefined, symbol, Bigint 

const abc=null;                        // datatype: object
const xyz=undefined                   // datatype: undefined
const id=Symbol('123');              // datatype: symbol
const anotherId=Symbol('123')   
console.log(id===anotherId);

// Reference (Non-Primitive)
// objects: Object, Array , Function

const heros=["shivam", "ram", "shyam"];  // datatype: object
let myObj={                              // datatype: object
    name:"shivam",
    age:20,
}
const myFunc=function(){                                    // datatype:object function
    console.log("Hello Everyone My self Shivam Singh"); 
}

console.log(typeof(heros));
