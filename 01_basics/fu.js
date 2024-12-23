// const m1=["ironman", "thor", "captain-America"]
// const m2=["superman", "flash", "aqua-Man"]

// // m1.push(m2)
// // console.log(m1) //it will push the array m2 in the array m1 as its last element
// // console.log(m1[3][1]); //it will print the 1st index element of the 3rd index array , whic is flash

// // const m3=m1.concat(m2) //concat gives two merge array into a new array and return it
// // console.log(m3);

// //or use of spread operator
// // const m4=[...m1, ...m2]
// // console.log(m4);

// // //use of flat method
// // const arr=[1,2,3,[4,5,6,[7,8,[9,10]]]]
// // const flattenedArr=arr.flat(Infinity)
// // console.log(flattenedArr); //it will flatten the array to a single array

// // const arr1=[1,2,3,4,5]
// // const mappedArr=arr1.map((x)=>[x])
// // console.log(mappedArr); // [ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ] ]

// // const flatMappedArr=arr1.flatMap((x)=>[x])
// // console.log(flatMappedArr); //it will return the array of elements [ 1, 2, 3, 4, 5 ]

// // const arr4=[1,2,3,4,5]
// // const entriesArr=arr4.entries()
// // console.log(entriesArr); //it will return the iterator object Object [Array Iterator] {}

// //use of keys
// const arr6=[1,2,3,4,5]
// // const keysArr=arr6.keys()
// // console.log(keysArr); //it will return the iterator object Object [Array Iterator] {}

// // arr6.splice(2,2);
// // console.log(arr6); //it will remove the 2 elements from the 2nd index 
// // arr6.splice(1,0,"kiwi"); //it will add the elements at the 2nd index
// // console.log(arr6); //it will add the element at the 2nd index


// const gameName=new String('  prince-jha-1013')
// console.log(gameName.match('jha')) //it match the string with a regex pattern

// //20) search
// console.log(gameName.search('jha')) //it search the string with a regex pattern


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

//access the values in object
console.log(jsUser['name'])

console.log(jsUser.sym1) // it will print undefined as we cant use symbol inside object
// console.log(jsUser[sym1]) // it will print undefined as we cant use symbol inside
console.log(typeof jsUser.sym1) //undefined, cuz we cant use symbol inside object

//changong thr values of values of a key in sid ethe object
jsUser.name = "Prince";
console.log(jsUser.name);


const myNum=[1,2,3,4,5,6,7,8,9,10]
const newNums=myNum.map((num)=> num*10).map((num)=>num+1).filter((num)=>num>=40)
    console.log(newNums) //prints all the numbers increased by 10 and then increased by and filtered numbers grrater than equal to 40
console.log(newNums)