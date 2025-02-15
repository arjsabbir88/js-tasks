// ### Task-2: 
// Count how many times a string has the letter `a` or `A`

const str = "Amar jibone Akash dakhi nai";

let counta = 0;
let countA = 0;
for(const strCount of str){
    if(strCount === 'a'){
        counta++;
    }
    else if (strCount === "A"){
        countA++;
    }
    else{
        console.log("There is no later a and A in the string");
    }
}
console.log("There the value of a is : ", counta)
console.log("There the number of A is : ",countA);