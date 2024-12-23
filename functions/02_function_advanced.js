function calculateCartPrice(num1){
return num1
}
console.log(calculateCartPrice(2,3,4,5,6,7,8,9,10)) //2

//use of rest operator in function parameter ... is the rest operator
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(2,3,4,5,6,7,8,9,10)) //[2,3,4,5,6,7,8,9,10]

function calculateCartPrice(val1, val2,...num1){
    return num1
}
console.log(calculateCartPrice(2,3,4,5,6,7,8,9,10)) //[4,5,6,7,8,9,10] as 2 and 3 are stored in val1 and val2

//handling object inside the function
function calculateCartPrice(val1, val2,...num1){
    return num1
}
console.log(calculateCartPrice(2,3,4,5,6,7,8,9,10, {name: "John"})) //[4,5,6,7,8,9,10, {name: "John"}]

//handling object inside the function....................
const userObj={
    username:"Prince",
    age: 25

}


function handleObj(anyObjectOfYourChoice){
    console.log(`Username is ${anyObjectOfYourChoice.username} and his age is ${anyObjectOfYourChoice.age}`)


}
handleObj(userObj) //Username is Prince and his age is 25
handleObj({
    username:"John",
    age: 30
}) //Username is John and his age is 30

handleObj({
    username:"John",
    ages: 25
}) //Username is John and his age is undefined , this o/p came as undefined for age because inside the function the key age is age spelled but while passing arguents we used different key spelling for age, we used ages, that;'s why

//HANDLING ARRAYS INSIDE THE FUNCTION

const userArray=["Prince", "52", "Doe", "Jane"]
function handleArray(anyArrayOfYourChoice){
    console.log(`Username is ${anyArrayOfYourChoice[0]} and his age is ${anyArrayOfYourChoice[1]}`)

}
handleArray(userArray) //Username is Prince and his age is 52
handleArray(["John", 30]) //Username is John and his age is 30


