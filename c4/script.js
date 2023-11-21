//Bult-in high order functions in JS.

//foreach()

var fruits =["apple", "banana", "cherry", "mango"]

fruits.forEach((element,indexnum)=>

console.log(element,indexnum))



var students =["Beni", "Deni","Jenni", "Lenni"]


students.forEach(
    (a)=>

console.log(a)
)


students.forEach((a,b)=>

console.log(a,b));


var testiing = [1,2,3,4,5]

testiing.forEach(
    (a)=>console.log(a)


    )
//MAP- Funkcija koja shto kreira nova niza so modificirani elementi od OSNOVNATA/PRVICHNATA NIZA.


var numarr = [1,2,3,4,5,6]
var newarr = numarr.map(
    a=>a+1
)

console.log(numarr)
console.log(newarr)


var students = [{name:"Beni",surname:"Benji"}, {name:"Deni",surname:"denji"},{name:"Jenni",surname:"Jennji"}, {name:"Lenni",surname:"Lennji"}]

var stundentNames = students.map(student=>student.surname)
console.log(students)
console.log(stundentNames)


//sort funkcija

var randomArr = [1,55,63,2,56,6784,344,1233]

var sortedArr = randomArr.sort(
(a,b)=>a-b

)
console.log(sortedArr)


//REDUCE

var sumOfRandNum = randomArr.reduce(
    (acc,curr)=>acc+curr,0
)

console.log(sumOfRandNum)

//FILTER

var numBiggerThan10 = randomArr.filter(
num=> num>10
)
console.log(numBiggerThan10)

//some

var numArr = [11,1,3,55,6883,33,2,1,6,7,7,7,3,2]
var numArrHasEvennum = numArr.some(num=>num%2==0)
console.log(numArrHasEvennum)

//FOR OF- DRUG NACHIN NA forEach SPECIFICHNO ZA NIZI
var niza1 = [1,2,4,6,8,10,100,300,500,700]

for(element of niza1){
    console.log(element)
}

//for in- Izminuvanje/Cycling/ elemnti na objekt.

var obj = {name:"John",surname:"Johngalli A",name:"Bob",surname:"Bob A",}

for(key in obj) {
    console.log(obj[key])
}

//ZA DOMA NAUCHI ZA FUNKCIJATA EVERY


//TERNARY OPERATORS - Zamena za if/else dokolku uslovite se kratki

var checkSum = num=>{
    return num % 2 == 0 ? "Even" : "Odd" //proveruva dokolku uslovot pred prashalnikot "?" e ispolnet, vo sprotivno go proveruva uslovot posle dvete tocki ":"
}

console.log(checkSum(10));


//SPREAD OPERATOR "..." - Se koristi za nizi i funkcii, koga sakame da prepratime odreden broj na elementi na nekoja funkcija. 

var originalArray = ["Audi",10,"Telefon",checkSum(10)]

var coppiedArray = [1, ...originalArray, "John"]

console.log(coppiedArray)


var arr1 = [1,2,3,4]

var arr2 = [5,6,7,8]

var combineArray = [...arr1, ...arr2]
console.log(combineArray)

function sum (a,b,c){
    return a+b+c
}

var sumArray = [10,20,30]

const result =sum(...sumArray)

console.log(result)

//Destructuring - Unpacking elements from arrays

var [firstnum, secondnum, thirdnum] = [1,2,3]

console.log(firstnum, thirdnum)


const person = {

    firstname:"john",
    lastname:"galli A.",
    age:"300",
}
const{firstname, age:personAge} = person

console.log(firstname, personAge);
