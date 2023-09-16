// Immediately Invoked Function Expression (IIFE)

(function chai(){                     // named iffe
    console.log("Db Connected");     // wrap function in a  paranthesis to execute  function directly 
})();                                // () is a execution call 

// we use IIFE to remove some unwanted things from global scope during function execution

// (function newchai(){
//     console.log("Db Connected");      
// })()  

//  this will not execute it thows error because the above function is invoked but not ended, so it throws error
// to remove this error use semi colon at end of execution call of previously used function


(()=>{ 
    console.log("Another Db Connected");       // simple IIFe
})();  

((name)=>{ 
    console.log("Another Db Connected ",name);     
})("shivam") 






