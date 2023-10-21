const myArr = []
// %DebugPrint(myArr)
// continious, holey=> having holes, 

// SMI => small integer
// packed element 
// double (float, string, function)

const arrTwo = [1, 2, 3, 4, 5]
// packed smi elements

arrTwo.push(6.0)
// packed double elements

arrTwo.push('7')
// packed elements

// its changes from smi to double  then it can't retored as previous 

arrTwo[10] = 11
// holey elements

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);

// bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 11)

// holes are very expensive in js


const arrThree = [1, 2, 3, 4, 5]

// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED

const arrFour = new Array(3)
// just 3 holes. HOLEY_SMI_ELEMENTS
arrFour[0] = '1' // HOLEY_ELEMENTS
arrFour[1] = '2' // HOLEY_ELEMENTS
arrFour[2] = '3' // HOLEY_ELEMENTS

const arrFive = []

arrFive.push('1') // PACKED_ELEMENT
arrFive.push('2') // PACKED_ELEMENT
arrFive.push('3') // PACKED_ELEMENT 

const arrSix = [1, 2, 3, 4, 5]
arrSix.push(Infinity) // PACKED_Double
arrSix.push(NaN) // PACKED_Double


// for, for-of, forEach 




