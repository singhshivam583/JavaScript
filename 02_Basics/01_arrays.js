
const myArr=[0, 1, 2, 3, 4, 5,]
const myHeros=["shaktiman","batman","superman"]
const myNewArr=new Array(1, 2, 3, 4, 5, 6)

// console.log(myArr[4]);
// console.log(myNewArr.length);

// array methods

// myArr.push(6)
// myArr.push(10)
// myArr.pop()
// myArr.unshift(10)
// myArr.shift()

// console.log(myArr.includes(9))  // checking the number is present or not
// console.log(myArr.indexOf(9))

// const newArr=myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr); // string

// slice and splice

console.log("A",myArr)

const myn1=myArr.slice(1,3);
console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3); 
console.log(myn2);
console.log("C",myArr);




