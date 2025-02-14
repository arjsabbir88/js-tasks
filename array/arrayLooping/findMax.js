// find maximum number in an array

const array = [44,62,67,33,56,22,55,76,88,22,44,66];

let max = array[0];

for(const num of array){
    if(num>max){
        max=num;
    }
}
console.log("Maximum number is : ", max);