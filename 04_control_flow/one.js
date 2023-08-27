// if

// const isUserLoggedIn=true
// if (isUserLoggedIn) {
//     console.log('executed');
// } 

// const temperature=41
// if (temperature<50) {
//     console.log('less than 50');
// }
// else{
//     console.log('not less than 50');
// }

// console.log('executed');

// const score =200
// if (score>100){
//     const power ="fly"
//     console.log(`user power ${power}`);
// }


// const balance=1000
// if (balance>500) console.log('test'),console.log('test2');  // short hand

// if(balance<500){
//     console.log('is less than 500');
// }else if(balance<750){
//     console.log('less than 750');
// }else if(balance<900){
//     console.log('less than 900');
// }else{
//     console.log('less than 1200');
// }


const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(userLoggedIn && debitCard  && 2==3){
    console.log('allow to buy course');
}
if (loggedInFromEmail||loggedInFromGoogle) {
    console.log('user logged in');
}

