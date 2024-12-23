//Map in Js?
//Map is a collection of elements where each element is stored as a Key, value pair.
//and
//Map is an object in js
//and
//map also takes callback function as a parameter


const myNum=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNum.map((num)=>num+10)
// console.log(newNums) //prints all the numbers increased by 10

console.log("------------------------------")
 //chaining
 const newNums=myNum.map((num)=> num*10).map((num)=>num+1).filter((num)=>num>=40)
    console.log(newNums) //prints all the numbers increased by 10 and then increased by and filtered numbers grrater than equal to 40
    