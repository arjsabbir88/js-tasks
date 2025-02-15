// ### Task-1: 
// Count how many times a string has the letter `a`

const str = "amr sonar bangla ami tomay valobasi";

let count = 0;
for(const strCount of str){
    // console.log(strCount)
    if(strCount === "a"){
        count ++;
    }
    else(
        console.log("there is no later of a")
    )
}
console.log( "there the later of a is : ", count);