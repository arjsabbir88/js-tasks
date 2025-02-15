//Use a for...of loop to concatenate all the elements of an array into a single string.

const arrays = ["tom", "And","jarry"];

let str = "";

for(const array of arrays){
    str+=array;
}
console.log(str);