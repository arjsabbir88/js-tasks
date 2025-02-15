// find maximum number in an array

const values = [55,44,66,88,22,46,48,12,65,88,95,11,99,32,101];

let indexValue = values[0];
for(let value = 0; value<=values.length; value++){

    if(indexValue<values[value]){
        indexValue=values[value];
    }
}
console.log(indexValue)