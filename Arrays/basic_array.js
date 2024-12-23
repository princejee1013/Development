 const myArr=[1,2,3,4,5,6]
 const arr=[1,2,3, true, "apple"]
 const myArr2= new Array(1,2,3,4,5)
 console.log(myArr[0]);// accessing array elements
 //help me understand array in Javascript
    //array is a collection of elements

//finding the length of the array
console.log(myArr.length);

//changing the value of any element in an array
myArr[0]=10;
console.log(myArr);

//adding the element in an array, or increasing the size

myArr[6]=7;
console.log(myArr);

//adding the element in an array using push
myArr.push(8);
console.log(myArr);

//diffrerent methods of array
//1) push
myArr.push(9);
console.log(myArr); //it will push the new element from the end of the array

//2) pop
myArr.pop();
console.log(myArr); //it will remove the last element from the array

//3) shift
myArr.shift();
console.log(myArr); //it will remove the first element from the array

//4) unshift
myArr.unshift(1);
console.log(myArr); //it will add the element at the start of the array

//5) splice
myArr.splice(2,2);
console.log(myArr); //it will remove the 2 elements from the 2nd index 

//6) slice
let arr1=myArr.slice(2,4);
console.log(arr1); //it will slice the array from 2nd index to 4th index

//7) concat
let arr2=myArr.concat(arr1);
console.log(arr2); //it will concat the two arrays

//8) reverse
let arr3=myArr.reverse();
console.log(arr3); //it will reverse the array

//9) sort
let arr4=myArr.sort();
console.log(arr4); //it will sort the array

//10) join
let arr5=myArr.join('-');
console.log(arr5); //it will join the array elements with a common partition

//11) indexOf
let arr6=myArr.indexOf(2);
console.log(arr6); //it will return the index of the element

//12) lastIndexOf
let arr7=myArr.lastIndexOf(2);
console.log(arr7); //it will return the last index of the element


//diffeerence b/w slice and splice array
//slice=> it will not change the original array
//splice=> it will change the original array
//give eg
let arr8=myArr.slice(2,4);
console.log(arr8); //it will slice the array from 2nd index to 4th index
console.log(myArr); //it will print the original array

let arr9=myArr.splice(2,2);
console.log(arr9); //it will remove the 2 elements from the 2nd index
console.log(myArr); //it will print the original array





 
