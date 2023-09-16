// let a = () => {
//     console.log(this);
//   }; 
// a();

// let b = function(){
//     console.log(this);
//   };
// b();

// x=true;
// y=false;
// z=x+y
// console.log(typeof z);
// console.log(z)


// function foo(a,b) {
//     console.log(arguments[1]);
//   }
// foo(3);

// let x = "4";
// let y = "5"; 
// console.log(x + y + + y + y);

// const a = { b: { c: 2 } };
// const b = {...a};
// a.b.c = 3;
// console.log(b.b.c);

// let x = [1, 2, 3];
// let [, , y] = x;
// console.log(y);

// let x = [1, 2, 3];
// let y = x.map((num) => {
// x.push(num + 3);
// return num + 1;
// });
// console.log(y);
// console.log(x);


// // creating 3 object constructors and assigning values to it
// let obj1 = { a: 10 };
// let obj2 = { b: 20 };
// let obj3 = { c: 30 };
// // Creating a target object and copying values
// // and properties to it using object.assign() method
// let new_obj = Object.assign({},obj1, obj2, obj3);
// // Displaying the target object
// console.log(new_obj);


// let x = {param:1}
// const foo = (a) => {
//   a.param +=1;
//   console.log('response', x, a)
// }
// foo(x);


// const obj1 = {
//     foo: "bar"
//   }
//   const obj2 = {
//     key: "value"
//   }
//   // Here, obj1 is the same after the Object.assign call
//   console.log(Object.assign({}, obj1, obj2));
//   console.log(obj1)
//   console.log(obj2)  
//   console.log("\n\n")
//   // Note that after this call, obj1 holds both keys. So this will mutate it:
//   console.log(Object.assign(obj1, obj2));
//   console.log(obj1) // This is different now
//   console.log(obj2)

//   let x = { a: 1 };
//   let y = Object.assign({},x);
//   console.log(x === y);
  

// let x = 5;
// let y = 6;
// x += x > y ? x : y;
// console.log(x);

// const arr = [1, 2, 3];
// arr.forEach((num) => num * 2);
// console.log(arr);

// let a = [1, 2, 3];
// a.push(a[2]++);
// console.log(a);

// let x = {
//     y: "z",
//     print: () => {
//         return this.y === "z";
//     }
// };
// console.log(x.print());
    
// let x = [1, 2, 3];
// let y = x.join("");
// console.log(typeof y);
// console.log(y);



// let x = [1, 2, 3];
// let y = x.map((x, i) => x + i);
// console.log(y);


// filter function only filters the falsy values and accepts only truthy value
// let x = [null, 0, "0", false, "a", true];
// let y = x.filter((value) => value);
// console.log(y);

// let x1 = [null, 0, "0", false, "a", true];
// let y1 = x1.filter(function(value){return value});
// console.log(y1);

// let x = () => {
//     return { y: "z" };
//     };
// console.log(typeof x().y); // string

let x = [1, 2, 3, 4];
let [a, ...b] = x.reverse();
console.log(b);

    


