//map

const map=new Map()
map.set('India', 'Bihar')
map.set('USA', 'New York')
map.set('UK', 'London')
map.set('Australia', 'Sydney')
map.set('Canada', 'Toronto')

//loop in map
for(const key of map){
    console.log(key)
}

//or
for(const [key, value] of map){
    console.log(key, ':-', value)
}

//you can't iterate in objects using for of loop
//for of loop is used to iterate in array and map
//for in loop is used to iterate in objects
//you can titerate map using for in loop cuz


//eg:
const obj={
    name: 'Prince',
    age: 22
}
for(const key in obj){
    // console.log(key) //print all keys
    // console.log(obj[key])// prints all values
    // console.log(`${key} ka value pair hai ${obj[key]}`); //print key and value together
    
}

//array

const arr=['Prince', 'Raj', 'Rahul', 'Rohit', 'Rajesh']

//use of for in loop to loop in array
for(const key in arr){
    // console.log(arr[key]) //prints all the elements in an array
    console.log(key); //prints keys of array which is nothing but index of array
    
}


//use of for each loop in array 

const coding=["js", "c++", "java", "python"]

coding.forEach( function (element) { // function doesnt have a name here and it doesnt have to be stored in any variable
    console.log(element) //print all element in aarray coding
})

//or using arrow function
coding.forEach( (ele)=>{
    // console.log("I am an arrow function")
    console.log(ele);
    

})



//or

function PrintCodingArray(ele){
    console.log(ele)
}

coding.forEach(PrintCodingArray) //passing the above function as a parameter (refeerence oonly) in for each loop



//when array contain objects as elements like data from databases comes like this, how to get access using for each loop


const data=[
    {
        name: 'Prince',
        age: 22
    },
    {
        name: 'Raj',
        age: 23
    },
    {
        name: 'Rahul',
        age: 24
    }
]

data.forEach( (ele)=>{
    console.log(ele.name, ele.age)
})