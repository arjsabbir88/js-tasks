// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

const str = "Hello! this is javascript";

const arrays = str.split(" ");
const returnArray = [];
for(let array = arrays.length -1 ; array>=0; array--){
    returnArray.push(arrays[array])
}

const revString = returnArray.join(" ")
console.log(revString);