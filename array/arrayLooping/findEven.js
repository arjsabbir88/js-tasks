// Write a JavaScript code to get the even numbers from an array using any looping technique.

const isEven = [65,88,1,65,12,6,16,15,14,11,9,32,12,9,7,13];

const evenNum = [];
const oddNum = [];

for(const even of isEven){
    if(even%2==0){
        evenNum.push(even);
    }else{
        oddNum.push(even)
    }

}
console.log(`The even numbers is : ${evenNum}`);
console.log(`The odd numbers is : ${oddNum}`);