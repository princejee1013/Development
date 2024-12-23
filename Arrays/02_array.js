const m1=["ironman", "thor", "captain-America"]
const m2=["superman", "flash", "aqua-Man"]

// m1.push(m2)
// console.log(m1) //it will push the array m2 in the array m1
// console.log(m1[3][1]); //it will print the 1st index element of the 3rd index array 

//use of concat
const m3=m1.concat(m2) //concat gives two merge array into a new array and return it
console.log(m3);

//or use of spread operator
const m4=[...m1, ...m2]
console.log(m4); //it will print the same output as the concat operator, it breaks the all the elements of the array and return the individual element in a new array


//use of flat method
const arr=[1,2,3,[4,5,6,[7,8,[9,10]]]]
const flattenedArr=arr.flat(Infinity)
console.log(flattenedArr); //it will flatten the array to a single array

//use of flatMap

const arr1=[1,2,3,4,5]
const mappedArr=arr1.map((x)=>[x])
console.log(mappedArr); //it will return the array of array
const flatMappedArr=arr1.flatMap((x)=>[x])
console.log(flatMappedArr); //it will return the array of elements

//use of fill
const arr2=[1,2,3,4,5]
const filledArr=arr2.fill(0,1,3)
console.log(filledArr); //it will fill the array with 0 from 1st index to 3rd index leaving the third index [ 1, 0, 0, 4, 5 ]


//use of copyWithin
const arr3=[1,2,3,4,5]
const copiedArr=arr3.copyWithin(0,3)
console.log(copiedArr); //it will copy the elements from 3rd index to 0th index [4,5,3,4,5]

//use of entries
const arr4=[1,2,3,4,5]
const entriesArr=arr4.entries()
console.log(entriesArr); //it will return the iterator object

console.log(Array.isArray(arr4)) //it will print true
console.log(Array.isArray(m1)) //it will print true
console.log(Array.isArray(m2)) //it will print true
console.log(Array.isArray(m3)) //it will print true
console.log(Array.isArray(m4)) //it will print true
console.log(Array.isArray("Prince")) //it will print false

//convert to arrray
const arr5=Array.from("Prince")
console.log(arr5); //it will convert the string to array

//*********************INTERVIEW************
console.log(Array.from({name:"Prince"})) //it will not convert the object ot array as it cant here in this case so it will print [] an empty array

//use of keys
const arr6=[1,2,3,4,5]
const keysArr=arr6.keys()
console.log(keysArr); //it will return the iterator object

//convert group of variable to array
let s1=100
let s2=200
let s3=300
console.log(Array.of(s1,s2,s3)); //[ 100, 200, 300 ]
// console.log(Array.of(s1,s2,s3,s4)); //it will throw an error as
//ReferenceError: s4 is not defined
let str1
let str2
let str3
console.log(Array.of(str1,str2,str3)); //[ undefined, undefined, undefined ]




