/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
let mark = " "

if(mark>=80){
    console.log("You get A+");
}
else if (mark>=70){
    console.log("You get A");
}
else if (mark>=60){
    console.log("You get A-");
}
else if (mark>=50){
    console.log("You get B");
}
else if (mark>=40){
    console.log("You get B-");
}
else if (mark>=33){
    console.log("Passed");
}
else{
    console.log("Good luck next time");
}
