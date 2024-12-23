const score=400

// console.log(score);

const balance=new Number(100) // we are explicitly defining that the variable will be a number
console.log(balance);

//converting that number to string
console.log(balance.toString());
//now can use the methods of strings on it
console.log(`The length of converted number to string is ${balance.toString().length}`);


//it print the precision of number starting from left
console.log(balance.toPrecision(3));
 console.log(balance.toFixed(1));


 const otherNumber = 123.8966
 console.log(otherNumber.toPrecision(4));
 //it give the fixed number of digits with precision after decimal
// console.log(otherNumber.toFixed(2)); //123.90
// console.log(otherNumber.toFixed(3)); //123.897
// console.log(otherNumber.toFixed(4)); //123.8966
// console.log(otherNumber.toPrecision(5)); //123.90
// console.log(otherNumber.toPrecision(6)); //123.8966
// console.log(otherNumber.toPrecision(7)); //123.89660
// console.log(otherNumber.toPrecision(8)); //123.896600
// console.log(otherNumber.toPrecision(9)); //123.8966000
// console.log(otherNumber.toPrecision(3)); //124
// console.log(otherNumber.toPrecision(2)); //120
 

const hundreds=1000000000000
//convert using toLocaleString
console.log(hundreds.toLocaleString('en-IN')); //10,00,00,00,00,000
/*****************************M A T H S ********************* */

console.log(Math);  //Object [Math] {} , it is a object
console.log(Math.PI); //3.141592653589793
console.log(Math.E); //2.718281828459045
console.log(Math.SQRT2); //1.4142135623730951   
console.log(Math.SQRT1_2); //0.7071067811865476
//converting the number to its absolute value
console.log(Math.abs(-100)); //100

//converting the number to its ceil value
console.log(Math.ceil(1.1)); //2
console.log(Math.ceil(1.9)); //2
console.log(Math.ceil(1.0)); //1
console.log(Math.ceil(-1.1)); //-1
console.log(Math.ceil(-1.9)); //-1
console.log(Math.ceil(-1.0)); //-1
//converting the number to its floor value
console.log(Math.floor(1.1)); //1
console.log(Math.floor(1.9)); //1
console.log(Math.floor(1.0)); //1
console.log(Math.floor(-1.1)); //-2
console.log(Math.floor(-1.9)); //-2
console.log(Math.floor(-1.0)); //-1
//converting the number to its round value
console.log(Math.round(1.1)); //1
console.log(Math.round(1.9)); //2
console.log(Math.round(1.0)); //1
console.log(Math.round(-1.1)); //-1
console.log(Math.round(-1.9)); //-2
console.log(Math.round(-1.0)); //-1
//converting the number to its square root value
console.log(Math.sqrt(9)); //3
console.log(Math.sqrt(16)); //4
console.log(Math.sqrt(25)); //5
console.log(Math.sqrt(36)); //6
console.log(Math.sqrt(49)); //7
console.log(Math.sqrt(64)); //8
console.log(Math.sqrt(81)); //9
console.log(Math.sqrt(100)); //10
console.log(Math.sqrt(121)); //11
console.log(Math.sqrt(144)); //12
console.log(Math.sqrt(169)); //13
console.log(Math.sqrt(196)); //14
console.log(Math.sqrt(225)); //15
console.log(Math.sqrt(256)); //16

//converting the number to its power value
console.log(Math.pow(2,3)); //8 =2^3
console.log(Math.pow(2,4)); //16 =2^4

//finding the min and max value in an array
console.log(Math.min(1,2,3,4,5,6,7,8,9,10)); //1
console.log(Math.max(1,2,3,4,5,6,7,8,9,10)); //10

//random() method of math object
console.log(Math.random()); //it produces a random number between 0 and 1
console.log(Math.random()*100); //it produces a random number between 0 and 100
console.log(Math.random()*1000); //it produces a random number between 0 and 1000
console.log(Math.random()*10000); //it produces a random number between 0 and 10000
console.log((Math.random()*10)+1);//9.002278110256851 it ensure the number will be betweeen 1 to 10 not from 0

//defining a min and max value and then generationg the random value between them using random
let min=10
let max=100
console.log(Math.floor(Math.random()*(max-min+1))+min); //it produces a random number between 10 and 100


