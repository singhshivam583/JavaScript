// for each

const coding=['js','py','ruby','java','cpp']

coding.forEach( function(item) {
    // console.log(item);
})                                    // call back functions don't have any name

coding.forEach((item)=> {
    // console.log(item);
})

function printMe(item){
    // console.log(item);
}
coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})

const myCoding=[
    {
        LanguageName:"Javascript",
        languageFile:"js"  
    },
    {
        LanguageName:"Java",
        languageFile:"java"
    },
    {
        LanguageName:"Python",
        languageFile:"py" 
    }
]
myCoding.forEach((item)=>{                // here item acts as object 
    console.log(item.languageFile);
})