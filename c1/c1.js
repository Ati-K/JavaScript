var firstName = "Bigman";
var lastName = "Manbig";
var Age = "174 Years Old"
var fullName = firstName + " " + lastName

console.log(fullName + " " + Age);

//Pravila Za Deklariranje Promelnivi. Promenlivite se case sensitive

//1. var/let/const abc; ABC; abc i ABC se razlicni promenlivi.

//2. let se koristiza definiranje vo odreden blok, var e dostapno za upotreba niz cel fajl. 
//3. Smee da ima brojki no ne smee da zapocnuva so brojka, a1 e okej 1a ne e okej.
//4. moze da sodrzi _ ili $ no ne i drugi specijalni karakteri.



//DataTypes
var myNumber = 42 //Numeric value
var myString = "Hellowe!" //String value aka just text lol
var myBoolean = true //Boolean aka True/False
var myChar = 'a'  //Character Value

var myArray = [true, 42, "Kebapi"] //Arrays Contain Multiple/Diffrent Value types. Arrays are considered objects

var myObject = {key1:"value1", key2:42, key3:true}
var myUndefined //undefined variable.

console.log(myNumber + myChar)


//operators


//+, -, *, /, %-modul

//++(zgolemuvanje za 1) --, NAMALUVANJE za 1

//+=, -=, *=, /=

// logicki operatori

//>, <, >=, <=, ==, ====, !-sprotivno, != razlicno, && - Znachi i ( and),, || odnosno, OR. 

var num1 = 12
var num2 = 4
var num3 = 58

var sum = num1 + num2


var diff = num1 - num2
var mult = num1 * num2
var div = num1 / num2 
var mod = num3 % num2
console.log(num1>num2)
num1+=num2
console.log(num1>=num2)
console.log(num1==num2)

if (num1!=num2) {
    num1++;
}
console.log(num1)


var flag = true
console.log(!flag)

//&& odnosno AND
// true && true = true
// true && false = false
// false && false = false
// false && true = false

//OR - ILI
// true || true = true
// true || false = true
// false || true = true
// false || false = false

//Conditions Odnosno Uslovi 

var numTen = 10

if
(numTen%2==0){
    console.log(numTen + " is even")
} else {
    console.log("Lamao")
}

var godini = 18

if(godini >= 18) {
    console.log("Le lenny face")
}   else {
        console.log("Sadeg")
}

var score = 79

if(score>=90&& score <=100){

    console.log("A")
}
    else if (score>=80&& score <90)
    {
        console.log("B")
    }
    else if (score>=70&& score <80)
    {
        console.log("C")
    }
    else if (score>=60&& score <70)
    {
        console.log("D")
    }
    else {
        console.log("Wow Buddy that's rough.")
    }
