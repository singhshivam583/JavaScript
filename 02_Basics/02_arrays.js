const marvel_heros=["thor", "ironman", "spriderman"]
const dc_heros=["batman", "superman", "flash"]

// marvel_heros.push(dc_heros);       // push operation make changes on original array
// console.log(marvel_heros);              

// const allHeros= marvel_heros.concat(dc_heros);   // concat operation create new array and push all the data inside 
// console.log(allHeros);

const allNewHeros=[...marvel_heros, ...dc_heros]   // spread
// console.log(allNewHeros);

const anotherArr=[1, 2, 4, [2, 5, 6, 7], 5, 6, [4, 6, [4, 2]]]

const real_anotheArr=anotherArr.flat(Infinity)
console.log(real_anotheArr);


console.log(Array.isArray("Shivam"));  // checking 
console.log(Array.from("Shivam"));     // converting to array
console.log(Array.from({name:"Shivam"}));   

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1, score2, score3 ));

