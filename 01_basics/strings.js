const name="prince"
const repo=50

// console.log(name + repo + "values") //old way to display the concatenation
// console.log(`Hello, my name is ${name} and my repo count is ${repo}`)
const gameName=new String('  prince-jha-1013')
console.log(gameName)

//imoportant javascript string methods and their eg code
//1) length
console.log(gameName.length) //it will return the length of the string, which is 16
//2) toUpperCase
console.log(gameName.toUpperCase()) //it will convert the string to upper case 
//3) toLowerCase
console.log(gameName.toLowerCase()) //it will convert the string to lower case
//4) includes
console.log(gameName.includes('jha')) //it will return true if the string contains the substring
//5) startsWith
console.log(gameName.startsWith('prince')) //it will return true if the string starts with the substring
//6) endsWith
console.log(gameName.endsWith('1013'))
//7) charAt
console.log(gameName.charAt(0))
//8) charCodeAt
console.log(gameName.charCodeAt(0)) //it will return the unicode value of the character at the 0th index
//9) indexOf
console.log(gameName.indexOf('-j')) //it will return the index of the substring
//10) lastIndexOf
console.log(gameName.lastIndexOf('-'))
//11) replace
console.log(gameName.replace('prince','prince-jha')) //it replace the substring with another substring
//12) slice
console.log(gameName.slice(0,6))
//13) split
console.log(gameName.split('-')) //it split the string using a common partition like whitespace or special ch used in string to a array
//14) substring
console.log(gameName.substring(0,6))
//15) substr
console.log(gameName.substr(0,6))
//16) trim
console.log(gameName.trim()) //it trim the white spaces in string before and after
//17) repeat
console.log(gameName.repeat(2)) //it repeat the string 2 times
//18) concat
console.log(gameName.concat('jha')) //it concat the string with another string

//19) match
console.log(gameName.match('jha')) //it match the string with a regex pattern

//20) search
console.log(gameName.search('jha')) //it search the string with a regex pattern
//21) replaceAll
console.log(gameName.replaceAll('prince','prince-jha')) //it replace all the occurence of a string with another string
//22) padStart
console.log(gameName.padStart(20,'*')) //it add the padding to the start of the string
//23) padEnd
console.log(gameName.padEnd(20,'*')) //it add the padding to the end of the string
//24) repeat
console.log(gameName.repeat(2)) //it repeat the string 2 times
//25) trimStart
console.log(gameName.trimStart()) //it trim the white spaces in string before
//26) trimEnd
console.log(gameName.trimEnd()) //it trim the white spaces in string after
//27) toLocaleLowerCase
console.log(gameName.toLocaleLowerCase()) //it convert the string to lower case

//28) toLocaleUpperCase
console.log(gameName.toLocaleUpperCase()) //it convert the string to upper case
//29) valueOf
console.log(gameName.valueOf()) //it return the value of the string
//30) toString
console.log(gameName.toString()) //it convert the string to string
