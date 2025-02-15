const str = "Hello! this is javascript";

let strArrays = str.split(" ")
console.log(strArrays);
let capitalizedArray = [];
for(const array of strArrays){
    const firstLater = array.charAt(0);
    const upperCase = firstLater.toUpperCase();
    const sliceStr = array.slice(1)
    result = upperCase+sliceStr
    capitalizedArray.push(result)
}
// console.log(result)
let givenStr = capitalizedArray.join(" ");
console.log(givenStr)