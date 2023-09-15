let x=10
const foo=()=>{
    console.log(x)
    if (true){
        let x=20;
    }
}
// foo()

let c=10
function abc(){
    if (true){
        let c=20;
        // console.log(c)
    }
    console.log(c)
    return c;
   
}
a=abc()
console.log(a)
