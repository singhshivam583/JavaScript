// for loop
for (let i = 0; i < 10; i++) {
    const element = i; 
    if (element==5){
        // console.log("I am the fifth number");
    }
    // console.log(element); 
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Table of${i}:`)
    for (let j = 1; j <=10; j++) {
        // console.log(`Inner Loop Value ${j} and outer loop value ${i}`);
        // console.log(i, '*', j, '=', i*j);
    }
    
}

let myArr=["flash", "batman", "superman"]
console.log(myArr.length);
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element);

}

//break and continue
for (let index = 1; index <=20; index++) {
    if (index==5){
        // console.log(`Detected 5`);
        // break;                            // 
    }
    // console.log(`Value of i is ${index}`);
    
}

for (let index = 1; index <=20; index++) {
    if (index==5){
        console.log(`Detected 5`);            // skip the current loop
        continue;
    }
    console.log(`Value of i is ${index}`);
    
} 