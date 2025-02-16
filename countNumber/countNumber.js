function countNumber(num){

    if(num<0 || typeof num == "string"){
        return "enter a integer number";
    }

    for(let count=0; count<=num; count++){
        return count
    }
}
const num = '&';
const count = countNumber(num);

console.log(count);