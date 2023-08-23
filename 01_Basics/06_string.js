const name="shivam"
const repoCount=50

// console.log(name + repoCount + "value")
console.log(`Hello My Name is ${name} and i have ${repoCount}+ repositories `)

const Name=new String("Shivam-Singh")

// console.log(Name[0])
// console.log(Name.__proto__)
console.log(Name.length)
// console.log(Name.toUpperCase())
// console.log(Name.charAt(2))
// console.log(Name.indexOf('v'))

// const newString=Name.substring(0,6)   // last index doesn't count
// console.log(newString)

// // const anotherString=Name.slice(7,12)
// const anotherString=Name.slice(-5,-1) //negative indexing start from end of string with -1 
// console.log(anotherString)

// const newStringOne="  Shivam  "
// console.log(newStringOne)
// //trim() method removes the spaces at both ends
// console.log(newStringOne.trim())

const url="https://shivam.com/profile%20shivam_"   
console.log(url)
console.log(url.replace('%20','-'))  
/* 
it only change first matching word ,
if the word is repeatedly present in the string 
then the first word would be replaced and rest of word will remain same in the string
*/ 
console.log(url.split("/"))      // it will split the string 







