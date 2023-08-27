//For in
const myObject={
    'js':'JavaScript',
    'cpp':'C++',
    'swift':'Swift by apple'
}

for(const key in myObject){
    // console.log(`${key}: ${myObject[key]}`);
}

const Programming=['js','rb','py','cpp','java']
for(const key in Programming){
    const value =Programming[key];             // by default the key is in array is its index
    // console.log(key, ':', value);
}

const map=new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('Fr','France')
map.set('IN','India')

for(const key in map){
    // console.log(key);         // can not iterate 
}                          