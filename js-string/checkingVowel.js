// ### Task-3: 

// Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u` 


let str = "education";

const vowel = new Set(['a','e','i','o','u']);
let foundVowel = new Set();
str=str.toLowerCase();
for(const char of str){
    if(vowel.has(char)){
        foundVowel.add(char)
    }
}
if(foundVowel.size === vowel.size){
    console.log("Finded all the vowel later in the string");
}else{
    console.log("There not find all the vowel later.");
}
