let number="33abc"
let toString=String(number) //convert the number 33 to string
console.log(toString) // print 33 in string type but  looks like normal number
console.log(typeof toString) // hence verified the type and got it as string stored in toString variable after conversion.
// 33=> string type 33
// 33abc=> string type 33abc
// 33.33=> string type 33.33
// 33.33abc=> string type 33.33abc





//To convert any data type to any other just use the upper case for first letter , aas here String for converting to string datatype

let string='33'
let toNumber=Number(string) //convert the string 33 to number
console.log(toNumber) // print 33 in number type but  looks like normal number
console.log(typeof toNumber) // hence verified the type and got it as number stored in toNumber variable after conversion.

let boolean=true
let toNumber1=Number(boolean) //convert the boolean true to number
console.log(toNumber1) // print 1 in number type but  looks like normal number
console.log(typeof toNumber1) // hence verified the type and got it as number stored in toNumber1 variable after conversion.


let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");why? When JavaScript encounters a string in a + operation, it switches to concatenation mode and treats all subsequent operands as strings. This is why 1 + "2"  produces "12".
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

// console.log( (3 + 4) * 5 % 3);

// console.log(+true); //1
// console.log(+""); //0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);



console.log(null>0); // false
console.log(null<0); // false
console.log(null==0); // false
console.log(null>=0); // true
console.log(null<=0); // true
console.log(null!=0); // true
// console.log(null===0); // false

//Comparisons (>= and <=) with null cause type coercion, making null equivalent to 0. This is why null >= 0  and null <= 0  both return true. However, null > 0  and null < 0  return false because null is not greater than or less than 0. Similarly, null == 0  returns false because null is not equal to 0. The only comparison that returns true is null >= 0  and null <= 0  because null is considered equivalent to 0 in this context.

//However, the != (inequality) operator does not perform the same coercion, so null is considered different from 0. This is why null != 0  returns true.

console.log(undefined>0); // false
console.log(undefined<0); // false
console.log(undefined==0); // false
console.log(undefined>=0); // false
console.log(undefined<=0); // false
console.log(undefined!=0); // true

//Explanation:
/*Relational Comparisons (> and <): When using relational operators like > or <, undefined is converted to NaN (Not a Number). Any comparison between NaN and a number returns false. This is why both undefined > 0 and undefined < 0 are false.

Equality (== and !=):

undefined == 0: This is false because undefined is only loosely equal to null, not to any number.
undefined != 0: This is true because undefined is not loosely equal to 0.
Comparisons (>= and <=): Since undefined converts to NaN, both undefined >= 0 and undefined <= 0 return false, as any comparison involving NaN returns false.*/




//console.log(null===undefined); // false
// console.log(null==undefined); // true

/*null == undefined: This is true because null and undefined are considered equal in loose equality (==) comparisons.
null === undefined: This is false because strict equality (===) checks for both value and type, and null and undefined are of different types.*/





// console.log(undefined===0); // false
// console.log(undefined===null); // false
// 
// console.log(null>=undefined); // true
// console.log(null<=undefined); // true
// console.log(null!=undefined); // false
// console.log(null>undefined); // false
// console.log(null<undefined); // false

// console.log(null>undefined); // false
// console.log(null<undefined); // false
// console.log(null==undefined); // true
// console.log(null>=undefined); // true
// console.log(null<=undefined); // true
// console.log(null!=undefined); // false
// console.log(null===undefined); // false
// console.log(null===0); // false
// console.log(null==0); // false
// console.log(null>=0); // true
// console.log(null<=0); // true
// console.log(null>0); // false
// console.log(null<0); // false
// console.log(null!=0); // true
// console.log(null===1); // false
// console.log(null==1); // false
// console.log(null>=1); // false
// console.log(null<=1); // true
// console.log(null>1); // false
// console.log(null<1); // true
// console.log(null!=1); // true
// console.log(null===-1); // false
// console.log(null==-1); // false




//*************************************************DATATYPE EXTRAS*********************************************** */
/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object */

       /*JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.

 */
