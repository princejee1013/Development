//reduce?
//reduce is a function that takes an array and reduces it to a single value.
//reduce takes two parameters
//first is a callback function
//second is initial value

//reduce using normal function
// const myNums=[1,2,3]

// const myTotal= myNums.reduce(function(acc, currVal){
//     console.log(`acc: ${acc}, and currVal: ${currVal}`)
//     return acc+currVal

// }, 0)
// console.log(myTotal) //6
//acc: 0, and currVal: 1
//acc: 1, and currVal: 2
//acc: 3, and currVal: 3

//reduce using arrow function
// const myNums=[1,2,3]
// const myTotal= myNums.reduce((acc, currVal)=> acc+currVal,0)
// console.log(myTotal) //6

//eg usecasee

const shoppingCart = [{ itemName: "JS Course", amount: 100 }
    , { itemName: "React Course", amount: 200 }
    , { itemName: "Angular Course", amount: 300 }
    , { itemName: "Vue Course", amount: 400 }
];

//add all the prices in the shopping cart amount 
const finalPriceTOPay=shoppingCart.reduce((acc, item)=>acc+item.amount, 0)
console.log(finalPriceTOPay) //1000
