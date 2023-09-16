myNums=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums=myNums.map((num)=>(num+10))
// console.log(newNums);

// const newNums=myNums.map((num)=>{return num+10})            // if u are using scope then return the value to newNums
// console.log(newNums);

// const newNums=myNums.forEach((num)=>(console.log(num+10)))  
// console.log(newNums);                                          // undefined foreach doesn't return any value to newNnums

//Chaining

// const newNums=myNums
//         .map((num)=> (num*10))
//         .map((num)=> (num+1))                 // 2nd map will apply on previous mapping result and returns the values to newNums
// console.log(newNums);

const newNums=myNums
        .map((num)=> (num*10))
        .map((num)=> (num+1))
        .filter((num)=> (num>30 && num<80))                // on map we can perform oprations but on filter we only check and apply conditions
console.log(newNums);






