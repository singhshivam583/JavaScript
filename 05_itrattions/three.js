// for of 

const arr=[1, 2, 3, 4, 5]

for (const num of arr){
    // console.log(num);
}

const greetings="Hello World!"
for(const greet of greetings){
    // console.log("each char is :",greet);
}

// Maps

const map=new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('Fr','France')
map.set('IN','India')

// console.log(map);

for(const [key , value] of map){         
    console.log(key, ':', value);
}


const myObject={
    'game1':'NFS',
    'game2':'Prince of Persia',
    'game3':'Spiderman'
}

// for (const [key,value] of myObject){        // objects are not iterable by this method
//     console.log(key,':',value);
// }