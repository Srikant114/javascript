// Number Data type
console.log(7, typeof 7);
console.log(9652, typeof 9652);
console.log(-32, typeof -32);
console.log(2.8, typeof 2.8);

//String Data type
console.log("Hello", typeof "Hello");
console.log("bAcKwArDs", typeof "bAcKwArDs");
console.log(`object`, typeof `object`);
console.log(`Hi i am Srikant, 
This is a Template string created using
Backtick `);
console.log("255", typeof "255");
console.log('56.2', typeof '56.2');

//Conversion string into number
// +,- can convert the string into number
console.log(+'500', typeof +'500');
// here NaN means (Not a Number) which means after conversion the output is not a number
console.log(+'srikant', typeof NaN);

parseInt('500Srikant')

//Conversion number to string
console.log(typeof (100 +''));
console.log("Srikant"+100, typeof ("Srikant" + 100))


//boolean data type
console.log(true, typeof true);
console.log(false, typeof false);

//Undefined
let a
console.log(a, typeof a);

//null
console.log(null, typeof null );
