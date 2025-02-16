// // data type

// // Primitive --> call by value
// // String, Number, Bool, NULL, undefined, Symbol, BigInt
// const score = 100;
// console.log(typeof score); // number

// const scoreval = 100.3;
// console.log(typeof scoreval); // number

// const isLoggedIn = false;
// console.log(typeof isLoggedIn); // boolean

// const outsideTemp = null;
// console.log(typeof outsideTemp); // object (this is a known JavaScript quirk)

// const bigNumber = 473462364364364623n;
// console.log(typeof bigNumber); // bigint

// let userMail;
// console.log(typeof userMail); // undefined

// // Symbol is a primitive data type that represents a unique identifier.
// const id = Symbol("123");
// console.log(typeof id); // symbol

// const anotherId = Symbol("123");
// const anotherId2 = Symbol("12323");

// // Every symbol is unique, even if they have the same description.
// console.log(id === anotherId); // false
// console.log(id === anotherId2); // false

// // Reference (Non-primitive)
// // Array, Object, Function
// const heroes = ["A", "B", "C"];
// console.log(typeof heroes); // object

// let myObj = {
//   name: "ABC",
//   age: 22,
// };
// console.log(typeof myObj); // object

// const myFunction = function (name) {
//   console.log(`Hello World, ${name}!`);
// };
// myFunction("ABCD"); // Hello World, ABCD!
// console.log(typeof myFunction); // function




// // date
// let myDate = new Date();
// console.log(myDate.toString()); // Example: "Sat Feb 03 2025 12:34:56 GMT+0600 (Bangladesh Standard Time)"
// console.log(myDate.toDateString()); // Example: "Sat Feb 03 2025"
// console.log(myDate.toLocaleDateString()); // Example: "2/3/2025" (format depends on locale)
// console.log(typeof myDate); // object

// let myCreatedDate1 = new Date(2023, 0, 23); // Jan 23, 2023
// let myCreatedDate2 = new Date(2023, 0, 23, 5, 3); // Jan 23, 2023, 05:03 AM
// let myCreatedDate3 = new Date("2023-01-14"); // Jan 14, 2023
// let myCreatedDate4 = new Date("01-14-2023"); // Jan 14, 2023

// console.log(myCreatedDate1.toLocaleString()); // "1/23/2023, 12:00:00 AM"
// console.log(myCreatedDate2.toLocaleString()); // "1/23/2023, 5:03:00 AM"
// console.log(myCreatedDate3.toLocaleString()); // "1/14/2023, 12:00:00 AM"
// console.log(myCreatedDate4.toLocaleString()); // "1/14/2023, 12:00:00 AM"

// let myTimeStamp = Date.now();
// console.log(myTimeStamp); // Current timestamp in milliseconds, e.g., 1706920000000
// console.log(myCreatedDate1.getTime()); // Timestamp of myCreatedDate1, e.g., 1674432000000
// console.log(Math.floor(Date.now() / 1000)); // Current timestamp in seconds, e.g., 1706920000

// let newDate = new Date();
// console.log(newDate); // Example: "Sat Feb 03 2025 12:34:56 GMT+0600 (Bangladesh Standard Time)"
// console.log(newDate.getMonth() + 1); // Example: 2 (since months are 0-based, Feb is 1 + 1)
// console.log(newDate.getDay()); // Example: 6 (Sunday = 0, Monday = 1, ..., Saturday = 6)

// `${newDate.getDay()} and the time `; 

// newDate.toLocaleString("default", {
//   weekday: "long",
// }); 


// // loop 
// let e = 10;
// while (e--) {
//   console.log("I Love Bangladesh");
// }
// // Output: "I Love Bangladesh" printed 10 times

// // Sum of numbers from 1 to 10 using while loop
// let num = 1,
//   sum = 0;
// while (num <= 10) {
//   sum = sum + num;
//   console.log(sum);
//   num++;
// }
// // Output: 1 3 6 10 15 21 28 36 45 55

// // Print even numbers from 1 to 10 using while loop
// let even = 1;
// while (even <= 10) {
//   if (even % 2 === 0) {
//     console.log(even);
//   }
//   even++;
// }
// // Output: 2 4 6 8 10

// // Print odd numbers from 1 to 10 using while loop
// let odd = 1;
// while (odd <= 10) {
//   if (odd % 2 != 0) {
//     console.log(odd);
//   }
//   odd++;
// }
// // Output: 1 3 5 7 9

// let num3 = 10;

// do {
//   console.log(num3);
//   num3--;
// } while (num3 >= 0);

// const array = [1, 2, 3, 4, 5, 6, 7];

// for (let i = 1; i < array.length; i++) {
//   if (i == 5) {
//     continue;
//   }
//   console.log(array[i]);
// }

// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// for (let i = 0; i < 5; i += 3) {
//   console.log(i);
// }

// let numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

// for (const prop of numbers) {
//   console.log(`${prop}\n`);
// }

// const course = {
//   courseName: "JS Boss",
//   price: "999",
//   instructor: "Mr Abc",
// };

// for (const prop in course) {
//   console.log(`${prop}  : ${course[prop]} \n`);
// }


// // num
// const p = 400;
// console.log(p); // 400

// const t = new Number(100);
// console.log(t); // [Number: 100]

// console.log(t.toString().length); // 3 (Converts 100 to string "100" and gets length)
// console.log(t.toFixed(2)); // 100.00 (Formats number with 2 decimal places)

// const num = 123.4456;
// console.log(num.toPrecision(3)); // 123 (Rounds to 3 significant digits)
// console.log(parseInt(num)); // 123 (Extracts integer part)

// const wo = "123";
// console.log(typeof parseFloat(wo)); // number (Converts string "123" to a floating-point number)

// const big = 100000;
// console.log(big.toLocaleString()); // 100,000 (Adds comma separators based on locale)

// // Math functions
// console.log(Math.abs(-5)); // 5 (Absolute value)
// console.log(Math.round(4.6)); // 5 (Rounds to nearest integer)
// console.log(Math.ceil(4.6)); // 5 (Rounds up)
// console.log(Math.floor(4.9)); // 4 (Rounds down)
// console.log(Math.floor(4.2)); // 4 (Rounds down)

// // Generating a random number in a range
// const min = 10;
// const max = 20;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// // Output: Random number between 10 and 20 (inclusive)



// // object
// // singleton
// // Object.create

// // object literals

// const mySym = Symbol("key1");

// const JsUser = {
//   name: "yama",
//   "full name": "yama bro",
//   [mySym]: "My key1",
//   age: 18,
//   location: "Jaipur",
//   email: "yama@google.com",
//   isLoggedIn: false,
//   lastLoginDays: ["Monday", "Saturday"],
// };

// console.log(JsUser.email); // yama@google.com
// console.log(JsUser["email"]); // yama@google.com
// console.log(JsUser["full name"]); // yama bro
// console.log(JsUser[mySym]); // My key1 (accessing symbol key)

// // Modifying properties
// JsUser.email = "yama@chatgpt.com";
// // Object.freeze(JsUser); // Uncommenting this will prevent further changes
// JsUser.email = "yama@microsoft.com";
// console.log(JsUser.email); // yama@microsoft.com (since freeze is commented)

// // Adding methods
// JsUser.greeting = function () {
//   console.log("Hello JS user");
// };
// JsUser.greetingTwo = function () {
//   console.log(`Hello JS user, ${this.name}`);
// };
// JsUser.greeting(); // Hello JS user
// JsUser.greetingTwo(); // Hello JS user, yama

// // Creating objects using Object.create (empty object)
// const tinderUser = new Object();
// const tinderUser2 = {}; // Same as above

// tinderUser.id = "123abc";
// tinderUser.name = "Sammy";
// tinderUser.isLoggedIn = false;

// console.log(tinderUser);
// // { id: '123abc', name: 'Sammy', isLoggedIn: false }

// const regularUser = {
//   email: "some@gmail.com",
//   fullname: {
//     userFullName: {
//       firstName: "Mr",
//       lastName: "Mead",
//     },
//   },
// };

// console.log(regularUser.fullname.userFullName.firstName); // Mr

// // Merging objects
// const obj1 = { 1: "a", 2: "b" };
// const obj2 = { 3: "a", 4: "b" };
// const obj4 = { 5: "a", 6: "b" };

// // Using Object.assign()
// const obj3 = Object.assign({}, obj1, obj2, obj4);
// console.log(obj3);
// // { 1: 'a', 2: 'b', 3: 'a', 4: 'b', 5: 'a', 6: 'b' }

// // Using spread operator
// const obj5 = { ...obj1, ...obj2, ...obj4 };
// console.log(obj5);
// // { 1: 'a', 2: 'b', 3: 'a', 4: 'b', 5: 'a', 6: 'b' }

// // Array of objects
// const users = [
//   {
//     id: 1,
//     email: "h@gmail.com",
//   },
//   {
//     id: 2,
//     email: "a@gmail.com",
//   },
//   {
//     id: 3,
//     email: "b@gmail.com",
//   },
// ];

// console.log(users[1].email); // a@gmail.com
// console.log(tinderUser);
// // { id: '123abc', name: 'Sammy', isLoggedIn: false }

// // Object methods
// console.log(Object.keys(tinderUser));
// // ['id', 'name', 'isLoggedIn'] (returns array of keys)

// console.log(Object.values(tinderUser));
// // ['123abc', 'Sammy', false] (returns array of values)

// console.log(Object.entries(tinderUser));
// // [['id', '123abc'], ['name', 'Sammy'], ['isLoggedIn', false]] (key-value pairs as array)

// console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true
// console.log(tinderUser.hasOwnProperty("password")); // false

// //Object de-structure and JSON API
// const course = {
//   courseName: "JS Boss",
//   price: "999",
//   instructor: "Mr Abc",
// };

// // Accessing object properties using dot notation
// console.log(course.courseName); // Output: JS Boss

// // Object destructuring to extract properties
// const { courseName } = course;
// console.log(courseName); // Output: JS Boss

// // Renaming the destructured variable
// const { courseName: name } = course;
// console.log(name); // Output: JS Boss

// // Looping through object properties using `for...in`
// for (const prop in course) {
//   console.log(`${prop}: ${course[prop]}`);
// }
// // Output:
// // courseName: JS Boss
// // price: 999
// // instructor: Mr Abc

// // Getting object keys and iterating over them using `for...of`
// const keys = Object.keys(course);
// console.log(keys); // Output: [ 'courseName', 'price', 'instructor' ]

// for (const key of keys) {
//   console.log(`${key}: ${course[key]}`);
// }
// // Output:
// // courseName: JS Boss
// // price: 999
// // instructor: Mr Abc

// const language = {
//   js: "JavaScript",
//   py: "Python",
//   cpp: "C++",
//   rn: "Ruby",
// };

// for (let val in language) {
//   console.log(val); // js, py, cpp, rn
// }

// for (let val in language) {
//   console.log(language[val]); // JavaScript, Python, C++, Ruby
// }

// for (let val in language) {
//   console.log(`${val} : ${language[val]}`);
//   // js : JavaScript
//   // py : Python
//   // cpp : C++
//   // rn : Ruby
// }


// // string 
// // String and string method
// const a = "hello";
// console.log(a); // hello

// const b = `hello man`;
// console.log(b); // hello man

// console.log(`${a}, how are you?`); // hello, how are you?

// const c = new String("hey bro");
// console.log(c); // [String: 'hey bro']

// console.log(c[0]); // h
// console.log(c.length); // 7

// console.log(c.charAt(6)); // o
// console.log(c.indexOf("b")); // 4

// console.log(c.toUpperCase()); // HEY BRO
// console.log(c.toLocaleLowerCase()); // hey bro

// console.log(c.substring(0, 3)); // hey
// console.log(c.substring(-3, 6)); // hey br (negative values are treated as 0)

// console.log(c.slice(-7, 3)); // hey (negative index starts from end)

// const d = new String("   hello   bro");

// console.log(d); // [String: '   hello   bro']
// console.log(d.trim()); // hello   bro (removes leading and trailing spaces)

// const e = new String("my love");

// console.log(e.replace(" ", "-")); // my-love

// const f = new String(`i love bangladesh`);

// console.log(f.includes("love")); // true
// console.log(f.includes("you")); // false
// console.log(f.split("")); // ['i', 'love', 'bangladesh']

// const g = `Mango`;

// console.log(g.split("").reverse());
// // [ 'o', 'g', 'n', 'a', 'M' ]

// console.log(g.split("").reverse().join(""));
// // ognaM



// //Array and array method
// const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr); // [0, 1, 2, 3, 4, 5]

// // Array methods
// myArr.push(6);
// console.log(myArr); // [0, 1, 2, 3, 4, 5, 6]

// myArr.pop();
// console.log(myArr); // [0, 1, 2, 3, 4, 5]

// myArr.unshift(9);
// console.log(myArr); // [9, 0, 1, 2, 3, 4, 5] (adds 9 at the beginning)

// myArr.shift();
// console.log(myArr); // [0, 1, 2, 3, 4, 5] (removes first element)

// console.log(myArr.includes(9)); // false (9 was removed)
// console.log(myArr.indexOf(4)); // 4 (index of 4 in the array)

// myArr.join("*");
// console.log(myArr); // [0, 1, 2, 3, 4, 5] (join() returns a string but doesn't modify the array)

// const alphabet = ["A", "B", "C", "D"];
// const newAlphabet = alphabet.slice(1, 3);
// console.log(newAlphabet); // ["B", "C"] (slice does not modify the original array)
// console.log(alphabet); // ["A", "B", "C", "D"]

// const alphabet2 = ["A", "B", "C", "D"];
// alphabet2.splice(2, 1, "E", "F");
// console.log(alphabet2); // ["A", "B", "E", "F", "D"] (removes "C" at index 2 and adds "E" & "F")

// alphabet2.splice(0, 1);
// console.log(alphabet2); // ["B", "E", "F", "D"] (removes "A" at index 0)

// const alpha = ["G", "H", "I", "J"];
// const num = [1, 2, 35, 6];

// alpha.push(num);
// console.log(alpha);
// // ["G", "H", "I", "J", [1, 2, 35, 6]] (array inside an array, not merged)

// const alpha1 = ["G", "H", "I", "J"];
// const num1 = [1, 2, 35, 6];
// console.log(alpha1.concat(num1));
// // ["G", "H", "I", "J", 1, 2, 35, 6] (concatenates both arrays properly)

// // another way
// console.log((alphaNum2 = [...alpha1, ...num1]));
// // ["G", "H", "I", "J", 1, 2, 35, 6] (spread operator works the same as concat)

// const nested = [1, 2, [3, 4, 5], 6, 7, [8, 9, [10, 11]]];
// console.log(nested.flat(Infinity));
// // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] (flattens all nested arrays)

// console.log(Array.isArray("hey bro"));
// // false (string is not an array)

// console.log(Array.from("hey bro"));
// // ["h", "e", "y", " ", "b", "r", "o"] (converts string into an array of characters)

// console.log(Array.isArray({ name: "hey bro" }));
// // false (an object is not an array)

// let s = 10;
// let p = 20;
// let m = 30;
// console.log(Array.of(s, p, m));
// // [10, 20, 30] (creates an array from given values)

// const Num = [1, 4, 6, 8, 3, 7];
// for (val of Num) {
//   console.log(val); // 1, 4, 6, 8, 3, 7
// }

// const map = new Map();
// map.set("BD", "Bangladesh");
// map.set("USA", "NewYork");
// map.set("Fr", "France");
// map.set("BD", "Bangladesh");

// for (const key of map) {
//   console.log(key); // [ 'BD', 'Bangladesh' ], [ 'USA', 'NewYork' ], [ 'Fr', 'France' ]
// }

// for (const [key, val] of map) {
//   console.log(key, ":-", val);
//   // BD :- Bangladesh
//   // USA :- NewYork
//   // Fr :- France
// }

// const language = ["JS", "CPP", "PY", "RB"];
// for (let val in language) {
//   console.log(language[val]); // JS, CPP, PY, RB
// }

// for (let val in language) {
//   console.log(val); // 0, 1, 2, 3
// }

// const coding = ["JavaScript", "C Plus Plus", "Python", "Ruby"];

// coding.forEach(function (val) {
//   console.log(val);
//   // JavaScript
//   // C Plus Plus
//   // Python
//   // Ruby
// });

// coding.forEach((val) => {
//   console.log(val);
//   // JavaScript
//   // C Plus Plus
//   // Python
//   // Ruby
// });

// const myLang = [
//   {
//     lanN: "JavaScript",
//     fileN: "js",
//   },
//   { 
//     lanN: "C Plus Plus",
//     fileN: "cpp",
//   },
//   {
//     lanN: "Python",
//     fileN: "py",
//   },
//   {
//     lanN: "Ruby",
//     fileN: "rb",
//   },
// ];

// myLang.forEach((items) => {
//   console.log(`${items.lanN} :- ${items.fileN}`);
//   // JavaScript :- js
//   // C Plus Plus :- cpp
//   // Python :- py
//   // Ruby :- rb
// });

// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newNums = myNums.filter