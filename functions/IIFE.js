// IIFE stands for
// Immediately Invoked Function Expression
// It is a function that is executed right after it is created
// It is a design pattern which is also known as Self-Executing Anonymous Function and contains two major parts
// The first is the anonymous function with lexical scope enclosed within the Grouping Operator ()
// This prevents accessing variables within the IIFE idiom as well as polluting the global scope
// The second part creates the immediately executing function expression ()
// The IIFE
// It is a common pattern for creating modules
// It is used to create a private scope
// It is used to avoid polluting the global scope
// It is used to avoid naming conflicts
// It is used to encapsulate code
// It is used to protect code from the outside world

// (function chai(){
//     let username="Prince"
//     console.log(this.username) 
// }) () //undefined


(function chai(){
    //NAMED IIFE
    console.log("DB is conneted")
}) (); //DB is conneted
//above semicolon is used to end the context at that point to avoid any error while defining new iffe function written below


// () ()
//first parenthesis if for function definition and second is fro executing it

//arrow function using iife

( ()=>{
    console.log("I am an arrow function");
} )();


(  (name)=>{
    //UNNAMED IFFFE WITH PARAMETER
    console.log(`My name is ${name}`)
})('Prince');


const car={
    brand:"Toyota",
    model:"Corolla",
}

//adding property to object using do tnotation
car.color="Black";
console.log(car);

//adding property to object using square bracket notation
car["price"]=1000000;
console.log(car);

//deleting property from object
delete car.color;
console.log(car);

//accessing object property
console.log(car.brand); //Toyota
console.log(car["model"]); //Corolla

//accessing object property using variable
let key="brand";
console.log(car[key]); //Toyota 

//checking if property exiqts in object
console.log("color" in car); //false

//unsing hasOwnProperty method
console.log(car.hasOwnProperty("brand")); //true

//unsing undefined to check if property exists
console.log(car.color===undefined); //true

//using optional chaining 
console.log(car?.brand); //undefined