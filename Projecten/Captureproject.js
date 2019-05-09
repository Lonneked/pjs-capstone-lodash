const _ = {
// Define function clamp
clamp(number, lower, upper){
//Define lower bound
  const lowerClampedValue = Math.max(number, lower);
//Define clamped value
  const clampedValue = Math.min(lowerClampedValue, upper);
//Return final value
  return clampedValue;
},

  //Define the function .inRange
inRange(number, start, end){
 //Check endvalue
  if (end === undefined) {
    end = start;
    start = 0;
  } //Check start value
  if (start > end) {
    const temp = end;
    end = start;
    start = temp;
    // Create isinRange variable
  } const isInRange = start <= number && end > number;
  return isInRange;
  },

  // Define object words
words(string){
  const words = string.split(' ');
  return words;
},
//Define object pad
pad(string, length){
// Check length
  if (length <= string.length){
    return string;
  };
// Create variable startPaddingLength, endPaddingLength, paddedString
  const startPaddingLength = Math.floor((length - string.length)  /2);
  const endPaddingLength =
        Math.floor(length - string.length - startPaddingLength);
  const paddedString =
        ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
  return paddedString;
},

// Define object has
has(object, key){
//Check if object includes key
const hasValue = object[key];
if(hasValue != undefined){
  return true;
}
  return false;
},

// Define object invert
invert(object){
let invertedObject = {};
//Create for loop
for (let key in object){
const originalValue = object[key];
invertedObject = {originalValue : key};
}
  return invertedObject;
},

//Define object findKey
findKey(object, predicate){
// Create for loop
for (let key in object){
let value = object[key];
let predicateReturnValue = predicate(value);
if (predicateReturnValue){
  return key;
};
};
// Return undefined
  undefined;
  return undefined;
},

// Define the drop method
drop(array, n){
// Define loop undefined
if (n === undefined) {
  n = 1;
}
// Define droppedArray
let droppedArray = array.slice(n, array.length);
  return droppedArray;
},

//Define the dropWhile method
dropWhile(array, predicate){
// Create anonymousCallback function
const anonymousCallback = (element, index) => {
return !predicate(element, index, array);
};
// Call findIndex on array
  let dropNumber = array.findIndex(anonymousCallback);
// Create droppedArray
  let droppedArray = this.drop(array, dropNumber);
  return droppedArray;
  },

//Define the chunk method
chunk(array, size = 1){
// Create new arrayChunks
let arrayChunks = [];
//Create loop to create arrayChunks
for (i = 0; i < array.length; i += size){
  let arrayChunk = array.slice(i, i+size);
  arrayChunks.push(arrayChunk);
}
  return arrayChunks;
},
};

// Do not write or modify code below this line.
module.exports = _;
