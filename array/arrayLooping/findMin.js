const array = [55,77,22,66,43,77,88,93,66,22,56,84,66,43,22,84,85];

let min = array[0];

for(const num of array){
    if (num<min){
        min=num;
    }
}

console.log(`Minimum number is ${min}`);