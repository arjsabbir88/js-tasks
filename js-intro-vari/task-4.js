// **var a = isNaN(‘11’);**

// **var a = isNaN(2-10);**

var a = isNaN('11');
console.log(a);
// it will be false because it can be converted into a number; 
// isNaN function first convert into number than check it if it number than return it false value 
// otherwise return it true vlaue

var b = isNaN(2-10)
console.log(b);
// it is the same return the false value 