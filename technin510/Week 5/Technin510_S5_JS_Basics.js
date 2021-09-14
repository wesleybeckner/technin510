// Defining variables

// var v1; //declares global variable, no value
// let v2; //declares locally

// const v3 = "hello";
// console.log(v1);

// // for (var i=0; i<10; i++) {
// //   console.log(i);
// // }
// // console.log("Outside (var):" + i);

// for (let j=0; j<10; j++) {
//   console.log(j);
// }

// // This throws an error:
// console.log("Outside (let):" + j);

// // // Data types

// var myBoolean = true;
// var myFavoriteNumber = 6;
// var myOtherFavoriteNumber = 3.14;
// var myString = "I see dead people";
// var myNull = null;
// var myUndefined;

// console.log(typeof myUndefined)

var myStringArray = ['good', 'bad', 'ugly'];
var myNumberArray = [1, 2, 3, 5, 8, 13, 21];

var myObject = {
  name: "Jibo",
  year: 2017,
  numberOfEyes: 1,
  eyeColor: 'white',
  faceColor: 'black'
};

// Checking types
// typeof myNumberArray;
// console.log(typeof myNumberArray);
// console.log(Array.isArray(myNumberArray));

// Math
// console.log(Math.round(Math.random()));
// Math.round(Math.random());

// // Array manipulation
// myStringArray.pop(); // remove item from end
// let newSize = myStringArray.push('weird'); // add to end
// myStringArray.shift(); // remove item from beginning
// myStringArray.unshift("good"); // add to beginning
// myNumberArray.concat([1, 1, 1, 1]); // returns new object
// // //Search and sort an array
// console.log(myNumberArray.indexOf(5));

// console.log(myNumberArray.concat([1, 1, 1, 1]));

// console.log(myStringArray.sort());
// console.log(myNumberArray.sort());
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

var arr = [1,2,3,4,1];
var arr = ['a', 'b', 'c', 'd', 'e']
console.log(arr.sort(() => Math.random() - 0.5))
console.log(shuffle(arr));

// // Iteration over arrays
// console.log(myNumberArray);

// // The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// // console.log(myNumberArray.map(Math.sqrt));
// // console.log(myNumberArray.map(function(x){return x-1;}));

// // reduces the array to a single value
// // console.log(myNumberArray.reduce(function(x,y){return x+y;}));
// myNumberArray.forEach(function(x){console.log(x);});

// // Iteration over objects
// console.log(Object.entries(myObject));