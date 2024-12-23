//singleton  from constructor =>  Object.create
//object literals are discussed below in this file
 ///********************I N T E R V I E W  ******************/
//iff you will try to use symbol in object directly as a key, 
//it will not work, you need to use [] to access the value
const sym1 = Symbol("key1");

const jsUser= {
    name: "John",
    "full name": "Prince Kumar Jha",
    age: 30,
    //sym1: "mykey1", //USING HERE, BUT IT S NOT A CORRECT SYNTAX
    [sym1]: "mykey1", //USING HERE, BUT ITS A CORRECT SYNTAX
    email: "prince@gmail.com",
    isLoggedIn: false,
    courses: ["React", "Node", "MongoDB"],
    login: function(){
        console.log("User logged in");
        this.isLoggedIn = true;
    },

} //object declaring that have key value pair

console.log(jsUser);
//accessing the values in object
console.log(jsUser.name); //old way, dont use it
console.log(jsUser["name"]); //new way, use it, always through a string key
console.log(jsUser["age"]); // here as well
console.log(jsUser["full name"]); // here as well
console.log(jsUser.sym1); // here as well
//see the data tye of symbol used in object
console.log(typeof jsUser.sym1); // it show o/p: string but its not string it should show symbol

console.log(typeof jsUser.age);  // as for here it show type as number

console.log(jsUser[sym1]); 
//check the type of the symboll used now
console.log(typeof jsUser[sym1]); // it show o/p: string  as we cant use symbol inside object, it will convert it to string


//changing the values of values of a key in sid ethe object
jsUser.name = "Prince";
console.log(jsUser.name);

// //if you want that someone cant change the value of any key, use freeze method
// // Object.freeze(jsUser);
// jsUser.name = "John";
// console.log(jsUser.name); //it will not change the value


// //if you want that someone cant change the value of any key, use seal method
// Object.seal(jsUser);
// jsUser.name = "John";
// console.log(jsUser.name); //it will not change the value

console.log(jsUser) //o/p: 
/* output----
{
  name: 'Prince',
  'full name': 'Prince Kumar Jha',
  age: 30,
  email: 'prince@gmail.com',
  isLoggedIn: false,
  courses: [ 'React', 'Node', 'MongoDB' ],
  login: [Function: login],
  [Symbol(key1)]: 'mykey1', //using the cotrrect syntax show it as symbol
}


*/

//use of function in object
jsUser.greeting=function(){
    console.log("Hello, How are you?");
}
console.log(jsUser.greeting); //[Function (anonymous)]
jsUser.greeting(); //Hello, How are you?
console.log(jsUser.greeting());//{  Hello, How are you?
                                //  undefined   }



jsUser.greeting2=function(){
    console.log(`HEllo JS User ${this.name}`);
}
jsUser.greeting2(); //HEllo JS User Prince






