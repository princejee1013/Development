function addTwoNumber(num1, num2){
    console.log(num1+num2);

}
addTwoNumber("2",3) //23 
addTwoNumber(2,3) //5
addTwoNumber(2) //NaN
addTwoNumber(2,3,4) //5
addTwoNumber(2,"3") //23
addTwoNumber(2,'a')//2a
addTwoNumber(2,'3a')//23a
addTwoNumber(2,3.5)//5.5
addTwoNumber(2, null)//2
addTwoNumber(2, undefined)//NaN
addTwoNumber(2, true)//3
addTwoNumber(2, false)//2
addTwoNumber(2, NaN)//NaN


function userLoginInMessage(user){
    return `${user} just logged in`
}
console.log(userLoginInMessage()); //undefined just logged in
console.log(userLoginInMessage("John")); //John just logged in
console.log(userLoginInMessage("John", "123")); //John just logged in

function userLoginInMessage(user="Prince"){
    if(!user){
        return "Please provide a username"
    }
    return `${user} just logged in`
}
console.log(userLoginInMessage()); //Prince just logged in
console.log(userLoginInMessage("John")); //John just logged in
