let a=100
const b=40
var c=300



if (true) {
    let a=10
    const b=20
    var c=30
    console.log(a,b,c);       // 10  20   30  local scope
}

console.log(a, b, c);     //  100 40 30   global scope


