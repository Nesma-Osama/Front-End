//Arrays

//If we initialize an array without explicity write data type  it will suppose and we cannot assign after this a different data type

//String array

let stringArray=['hello','welcome',"nice to meet you"]

//String union Number
let twoDataTypeArray=[12,"welcome",65]

//Mixed
let mixArray=[true,32,"hello"]

//any Array
let anyArray=[]

//String Explicity
let StringExp:string[]=[]

//we cannot insert inside string array numbers of bool

//we cannot insert inside twoDataType bool

//mixed accept bool number string

//-------------------------------------------------------------------------
//Tuple
let myTuple:[string,number,boolean]=["nesma",2,true]//this is a tuple has only (3) element cannot assign it any array of the same data type

//------------------------------------------------------------------------------
//Objects (note array ia an object also)
// 
const myObj1={
    name:"nesma",
    age:32
}

console.log(typeof(myObj1))
//Expicity specify the type of attributes

type Person={
    name:string,
    age:number,
    isOld:boolean
}

// make another object the type of it is Person
const person1:Person={
    name:"osama",
    age:32,
    isOld:true
}
console.log(typeof(person1))//also object but has name->string,age->number,isold->boolean 
//person1 must have only these name,age,isOld cannot add one or remove one
//---------------------------------------------------------------------

//make one data is option
type human={
    name?:string,
    active?:boolean
}

let human1:human={
    name:"nesma"
}
//because name is option when try to access it must check if it undefiend or not  even if the velue exist

//By using ?
console.log(human1.name?.toLowerCase())
// Or if condition
if(human1.name)
    console.log(human1.name.toLowerCase())
//-------------------------------------------------------------------
//Enums
enum Grade{
    A=1,//without this A will be =0
    B,
    C,
    D,
    F,
}