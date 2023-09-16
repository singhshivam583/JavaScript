let a=100
const b=40
var c=300



if (true) {
    let a=10
    const b=20
    var c=30
    // console.log(a,b,c);       // 10  20   30  local scope
}

// console.log(a, b, c);     //  100 40 30   global scope 

function one(){
    const username="Shivam"
    function two(){
        const website="youtube"
        console.log(username);         // child function can access variables directly from parents fucntions
    }
    // console.log(website);          // parent functions can't access the vriable from child function directly
    two();
}
// one();

if (true) {
    const username="shivam"
    if (username==="shivam"){
        const website=" youtube"
        // console.log(username+website);
    }
    // console.log(website);       // error

}
// console.log(username);          // error

// +++++++++++++++++++++interesting+++++++++++++++++++++

console.log(addone(5))
function addone(num){
    return num + 1;      
}


// console.log(addTwo(5))              // we get an error on calling function before initialization of function
const addTwo=function(num){        
    return num + 2;      
}

