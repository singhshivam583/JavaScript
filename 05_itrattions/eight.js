// Reduce
const myArr=[1, 2, 3]
const initialVal=0
// const myTotal=myArr.reduce(function (acc, currentVal) {
//     console.log(`Accumulator ${acc} and Current Value ${currentVal}`);
//     return acc + currentVal
// },initialVal)
// console.log('My Total is ', myTotal); 

/* 
currentVal is picked from array  and initially acc=initialVal
and  accumulator increased by acc=acc+currentVal
*/

const myTotal=myArr.reduce((acc, currentVal)=>(acc+currentVal), initialVal)
// console.log(myTotal);

const shoppingCart=[
    {
        itemName:"js Course",
        price: 2999
    },
    {
        itemName:"py course",
        price: 999
    },
    {
        itemName:"mobile dev course",
        price: 6999
    },
    {
        itemName:"data science course",
        price: 12999
    }
]

const Total=shoppingCart.reduce((acc,item)=>(acc+item.price),0)
console.log(Total);
