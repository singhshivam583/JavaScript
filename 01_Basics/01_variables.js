const  accountId=12345
let accountEmail='shivamsingh123@gmail.com'
var accountPassword='abcd'
accountCity='lucknow'

// accountId= 2 // not allowed

accountEmail='abc@gmail.com'
accountPassword='3746384'
accountCity='delhi'

console.log(accountId)

/*
do not use var because of block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity])
