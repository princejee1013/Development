const user={
    name:"John",
    age: 25,
   // to refer current context, this keyword is used
    welcomeMessage: function(){
        console.log(`${this.name}, welcome to our site`)
        console.log(this)
    }
}

// user.welcomeMessage() //John, welcome to our site
// user.name="Prince" //the current context for name has been changed, so when again print the method, it will show name as prince, cuz we are printing the current context.
// user.welcomeMessage() //Prince, welcome to our site
// console.log(this) // o/p: {}, the current context here globally is  empty object

// ****I n t e r v i e w****
//but the current context globally in dev console of browser is:
// Window {window: Window, self: Window, document: document, name: "", location: Location, …}





function chai(){
    console.log(this) // o/p: {}, the current context here is empty object
}
chai() // here the cuurent context inside the function is what? empty object


function chaii(){
    let username="Prince"
    console.log(this.username) 
}
chaii()  //undefined , why? cuz the current context here is empty object



const chaiii=function(){
    let username="Prince"
    console.log(this.username) 
}
chaiii()  //undefined 


//arrow function
//here arrow function is hold in a variable but its not necesary to do always,
const chaiiii=()=>{
    let username="Prince"
    console.log(this.username) //undefined
    
    console.log(this) //{}
}

chaiiii() //undefined , why? cuz the current context here is empty object



//basic arrow function
//explicit return of a fucntion
const addTwo=(num1, num2)=>{
    return num1+num2
}
console.log(addTwo(2,3)) //5

//if only one parameter is there, then no need to use paranthesis
const addOne=num1=>{
    return num1+1
}
console.log(addOne(2)) //3

//if only one line of code is there, then no need to use return keyword
const addOnee=num1=>num1+1
console.log(addOnee(2)) //3

//if no parameter is there, then use paranthesis
const addOneee=()=>1+1
console.log(addOneee()) //2

const add =(num1, num2)=> num1+num2

const addD =(num1, num2)=> (num1+num2) //implicit return of a function

console.log(addD(2,3)) //5


console.log(add(2,3)) //5

//in implicit return to return a object, we have to wra the o/p in {}
const ObjectWalaRetuen =(num1, num2)=> ({usrname:"prince"})
console.log(ObjectWalaRetuen(2,3)) //{usrname:"prince"}










