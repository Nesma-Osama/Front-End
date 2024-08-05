// Comment in js
///////////////////////////////////////////////////////////////////////////////////////
//camelCase is used for javascript
///////////////////////////////////////////////////////////////////////////////////////
//Output 
console.log("hello double quote")
console.log('hello single quote')
console.log('hello back tac ')
///////////////////////////////////////////////////////////////////////////////////////
//Alert
// window.alert("this is an alert")
//////////////////////////////////////////////////////////////////////////////////////
//insert content inside an element
document.getElementById("first-header").textContent = 'Hello'
/////////////////////////////////////////////////////////////////////////////////////
////varaibles
//1-decleration
let age;
//2- assignment
age = 21;
//3- both
let y = "Hello";
let online = true;
//4- placeholder
console.log(`you are ${age} years old`)//must be back tack
//5 data type
console.log(typeof age)//number int and float are numbers
console.log(typeof y)//string
console.log(typeof online)//boolean
/////////////////////////////////////////////////////////////////////////////////////
////Arithmetic
let numberStudents = 31;

//1-add
numberStudents = numberStudents + 1;//numberStudents+=1
console.log(` numberStudents after add 1 = ${numberStudents}`)

//2-sub
numberStudents = numberStudents - 1;//numberStudents-=1
console.log(` numberStudents after minus 1 = ${numberStudents}`)

//3-multiple
numberStudents = numberStudents * 2;//numberStudents*=2
console.log(` numberStudents after multiply by 2 = ${numberStudents}`)

//4-division
numberStudents = numberStudents / 2;//numberStudents/=2
console.log(` numberStudents after division by 2 = ${numberStudents}`)

//5-power
numberStudents = numberStudents ** 2;//numberStudents**=2
console.log(` numberStudents after power by 2 = ${numberStudents}`)

//6-mod
numberStudents = numberStudents % 2;//numberStudents%=2
console.log(` numberStudents after mod by 2  = ${numberStudents}`)

//7- ++
numberStudents++;
console.log(` numberStudents after add 1  = ${numberStudents}`)

//8-mod
numberStudents--;
console.log(` numberStudents after minus 1 = ${numberStudents}`)
/*operators precendence
1- ()
2-power
3- * / %
4- + -

*/
////////////////////////////////////////////////////////////////////////////////////
////How to take an inpout
//1-Easy way
// let yourName=window.prompt("Enter your name")
// console.log(`You Enterend ${yourName}`)
//2- professional
document.getElementById("name-button").onclick = function () {
    let yourName = document.getElementById("Name-field").value;
    document.getElementById("first-header").textContent = `Hello ${yourName}`

}
//////////////////////////////////////////////////////////////////////////////////////
//typeconverstion
let strConvert = "hello"
console.log(Number(strConvert), typeof Number(strConvert))//not a number
console.log(String(strConvert), typeof String(strConvert))// the same
console.log(Boolean(strConvert), typeof Boolean(strConvert))//true
let emptyConvert = ""
console.log(Number(emptyConvert), typeof Number(emptyConvert))//0
console.log(String(emptyConvert), typeof String(emptyConvert))//empty string
console.log(Boolean(emptyConvert), typeof Boolean(emptyConvert))//false
///////////////////////////////////////////////////////////////////////////////////
//Constant
const PI = 3.14
///////////////////////////////////////////////////////////////////////////////////
//counter
let count = 0;
let decrease = document.getElementById("decrease")
let increase = document.getElementById("increase")
let reset = document.getElementById("reset")
document.getElementById("number").textContent = count
decrease.onclick = function () {
    count--
    document.getElementById("number").textContent = count

}
increase.onclick = function () {
    count++
    document.getElementById("number").textContent = count

}
reset.onclick = function () {
    count = 0
    document.getElementById("number").textContent = count

}

///////////////////////////////////////////////////////////////////////////////////////
////Math
//PI
console.log(` the value of PI ${Math.PI}`)
//E
console.log(` the value of e ${Math.E}`)
//round
console.log(` the  round value of 3.5  is ${Math.round(3.5)}`)
//floor
console.log(` the  floor value of 3.5  is ${Math.floor(3.5)}`)
//ceil
console.log(` the  ceil value of 3.5  is ${Math.ceil(3.5)}`)
//trunc
console.log(` the  trunc value of 3.5  is ${Math.trunc(3.5)}`)
//sin ran
console.log(` the  sin  value of PI  is ${Math.sin(Math.PI / 3)}`)
//cos
console.log(` the  cos value of PI  is ${Math.cos(Math.PI / 3)}`)
//abs
console.log(` the  abs value of -3.21  is ${Math.abs(-3.21)}`)
//sign
console.log(` the  abs value of -3.21  is ${Math.sign(-3.21)}`)
//max
console.log(` the  max value of 3,2,1  is ${Math.max(3, 2, 1)}`)
//min
console.log(` the  min value of 3,2,1  is ${Math.min(3, 2, 1)}`)
//pow
console.log(` the  pow of 3 2  is ${Math.pow(3, 2)}`)
//////////////////////////////////////////////////////////////////////////////////////////////
////random
//between [0-) 
console.log(` Random between 0 and 1 is ${Math.random()}`)
//between [0-6)
console.log(` Random between 0 and 6 is ${Math.random() * 6}`)
//between [0-6) integer
console.log(` Random between 0 and 6 is ${Math.floor(Math.random() * 6)}`)
//between [1-7) integer
console.log(` Random between 0 and 6 is ${Math.floor(Math.random() * 6) + 1}`)
//between certen values
let min = 50
let max = 100
console.log(`Random between min and max is ${Math.floor(Math.random() * (max - min)) + min}`)
//////////////////////////////////////////////////////////////////////////////////////////////
//IF statement
if (5 > 3) {
    console.log("Yes 5 is greater than 3")

}
else if (3 < 4) {
    console.log("Yes 4 is greater than 3")

}
else {
    console.log("no 5 is less than 3")

}
/////////////////////////////////////////////////////////////////////////////////////////
//Ternary operator
let ageMessage = 7 > 3 ? "Yes, 7 is greater than 3" : "No, 7 is less than 3"
console.log(ageMessage)

/////////////////////////////////////////////////////////////////////////////////////////
//checked
const checkBox = document.getElementById("mycheckbox")
const checkedMessage = document.getElementById("checked-message")
const checkSubmit = document.getElementById("check-submit")
checkSubmit.onclick = function () {
    if (checkBox.checked) {
        console.log("true")
        checkedMessage.textContent = "You checked"
    }
    else {
        checkedMessage.textContent = "You dont checked"

    }
}
//////////////////////////////////////////////////////////////////////////////////////////////
//switch
let day = 5
switch (day) {
    case 1:
        console.log("it is sunday")
        break;
    case 2:
        console.log("it is monday")
        break;
    case 3:
        console.log("it is tuseday")
        break;
    case 4:
        console.log("it is wednesday")
        break;
    case 5:
        console.log("it is thrusday")
        break;
    case 6:
        console.log("it is fridat")
        break;
    case 7:
        console.log("it is sutardat")
        break;
    default:
        console.log("not a day")

}
////////////////////////////////////////////////////////////////////////////////////////
////String
//charAt return char is in an index
let word = "Hello, World"
console.log(`Find a letter in an index ${word.charAt(0)}`)
//index of return index of first occurences of this letter
console.log(`Find a index of first occure of l ${word.indexOf('l')}`)
//lastindex of return index of last occurences of this letter
console.log(`Find a last index of first occure of l ${word.lastIndexOf('l')}`)
//lenght
console.log(`length of this string is ${word.length}`)
//trim()
console.log(`trim of this string is ${(" " + word + "  ").trim()}`)
//toUpperCase()
console.log(`upper of this string is ${(word).toUpperCase()}`)
//toLowerCase()
console.log(`lower of this string is ${(word).toLowerCase()}`)
//repeat()
console.log(`repeat of this string is ${(word).repeat(2)}`)
//.startwith()
console.log(`start with of this string is ${(word).startsWith("H")}`)
//.endstwith()
console.log(`end with of this string is ${(word).endsWith("H")}`)
//.includes()
console.log(`includes of this string is ${(word).includes("H")}`)
//.replace()
console.log(`includes of this string is ${(word).replaceAll("l", "o")}`)
//.padstart(numbers of length I want the string be,the char i want to fill the spaces)
console.log(`includes of this string is ${(word).padStart(20, "/")}`)
//slice
console.log(`from index 1 to 3 ${word.slice(1, 4)}`)
console.log(`from index 3 to end ${word.slice(3)}`)
console.log(`the last two letter ${word.slice(-2)}`)
console.log(`find the first word before , ${word.slice(0, word.indexOf(","))}`)
////////////////////////////////////////////////////////////////////////////////////////
//strict eqaulity
//== equal values
// === values and datatype
// !=
// !==
if (PI == "3.14") {
    console.log("equal value not data type")
}

if (PI === "3.14") {
    console.log("equal value and data type")

}

if (PI != "3.14") {
    console.log(" dosnt equal value but can be different data type")

}
if (PI !== "3.14") {
    console.log(" dosnt equal value but and must same datatype data type")

}
////////////////////////////////////////////////////////////////////////////////////////
////Loops
//while
let i = 0
while (i < 5) {
    console.log(`i is equal to ${i}`)
    i++;
}
//do while

do {
    console.log("must execute an one iterator alt least")
    i++
} while (i < 5)
//For
for (let m = 0; m <= 10; m++)//local m
{
    if (m == 5)
        continue
    else if (m == 9)
        break
    else
        console.log(`for i =${m}`)
}
//console.log(m) Error
////////////////////////////////////////////////////////////////////////////////////////
//not a number 
if (isNaN("hello")) {
    console.log("not a number")
}
/////////////////////////////////////////////////////////////////////////////////////////
//functions
function happtBirthday(name, age) {
    console.log(`Happy birthday ${name} you are now ${age} years old`)
}
happtBirthday("nesma", 21

)
///////////////////////////////////////////////////////////////////////////////////////////
//Arrays
let fruits = ["orange", "apple"]
//display all array
console.log(` array is ${fruits}`)
//display item
console.log(` first item  is ${fruits[0]}`)
//add first way
fruits[2] = "coconuts"
console.log(` array  is ${fruits}`)
//second way
fruits.push("mango")
console.log(` array  is ${fruits}`)
//pop
fruits.pop()
console.log(` array  is ${fruits}`)
//unshift add from biggining
fruits.unshift("mango")
console.log(` array  is ${fruits}`)
//shift remove from biggining
fruits.shift()
console.log(` array  is ${fruits}`)
//length
console.log(`length is equal to ${fruits.length}`)
//indexof
console.log(`index of apple is equal to ${fruits.indexOf("apple")}`)
let joinArray = fruits.join("-")
console.log(`join fruits equal to ${joinArray}`)
//sort and reverse
fruits.sort().reverse()
//display
for (let fruit of fruits) {
    console.log(fruit)
}
//////////////////////////////////////////////////////////////////////////////////////
//spread operator ... unback
let foodArray = [...fruits, "milk"]
console.log(`spread operator ${foodArray}`)
//////////////////////////////////////////////////////////////////////////////////////
//reset parameters
// spread = make an array into spread parameters
// reset =make spread parameters array
function getFoodArray(...foods) {
    return foods//take many parameters and convert it into array


}
const foodReturned = getFoodArray("mango", "apple", "coconuts")
console.log(`array rest returned is ${foodReturned}`)
///////////////////////////////////////////////////////////////////////////////////////////
//dice
const diceButton = document.getElementById("dice-submit")
const diceInput = document.getElementById("dice-text-input")
const diceOutputText = document.getElementById("dice-text-output")
const diceOutputImage = document.getElementById("dice-image-output")
function generateArrayRandom(number) {
    let array = []
    let images = []

    for (let i = 0; i < number; i++) {
        let random = Math.floor(Math.random() * (6) + 1)
        array.push(random)
        images.push(`<img src="../images/${random}.jfif"/>`)
    }
    diceOutputText.textContent = ` dice:  ${array.join(", ")}`
    diceOutputImage.innerHTML = images.join(" ")

}
diceButton.onclick = function () {
    let diceInputNumber = Number(diceInput.value)
    console.log(diceInputNumber)
    if (diceInputNumber <= 0) {
        diceOutputText.textContent = `must Enter a number is greater than 0`

    }
    else {
        generateArrayRandom(diceInputNumber)
    }
}
/////////////////////////////////////////////////////////////////////////////////////////
//Generate password
function generatePassword(number,isContainLowerCase,isContainUpperCase,isContaiNumbers,isContainSymbols)
{
    const lowerLetters="abcdefghijklmnopqrstuvwxyz"
    const upperLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers="0123456789"
    const symbols="@#$&()_?"
    let contains=''
    let passWord=""
    contains+=isContainLowerCase?lowerLetters:""
    contains+=isContainUpperCase?upperLetters:""
    contains+=isContaiNumbers?numbers:""
    contains+=isContainSymbols?symbols:""
    if(contains==="")
        return "(must choose one type at least)"
    if(number<=0)
        return"(must password be at least one length)"
    for(let i=0;i<number;i++)
    {
        let index=Math.floor(Math.random()*(contains.length))
        passWord+=contains[index]
    }
    return passWord

}
console.log(generatePassword(12,true,false,true,true))
/////////////////////////////////////////////////////////////////////////////////////////////////
//callback function is a function pass to another function as an argument
hello(goodBye)
function hello(fun)
{ 
    fun()
    console.log("hello")
}
function goodBye(){
    console.log("Good Bye")
}
