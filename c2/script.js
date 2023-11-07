console.log("hello")

let num = 5
console.log(num)

var dayNum = 5

switch (dayNum) {
    case 1: console.log("Monday");
    break;
    case 2: console.log("Tuesday");
    break;
    case 3: console.log("Wednesday");
    break;
    case 4: console.log("Thursday");
    break;
    case 5: console.log("Friday");
    break;
    case 6: console.log("Saturday");
    break;
    case 7: console.log("Sunday");
    break;
    default:
        console.log("Invalid Day Number, there's only 7 days in the week, keep that in mind : )");
        break;
}


//Funkcii
//Funkcija Bez Parametri
function ime_na_funkcija(){
    console.log("hello")

}
ime_na_funkcija()


function greeting(name, age, phrase)
{
    console.log(phrase+ " my name is " +name+ " and I am " +age + "  years old" )
}

greeting("Atanas" , 27, "Hello")

function zbir(a, b) {

return a+b
}

console.log(zbir(5,5));

var res = zbir(5,5);
console.log(res)


//fat arrow functions => 


var luckyNumber = 7

const multiplyByTen = () =>{

    console.log(luckyNumber*10)
}

multiplyByTen()

let x = a=>a+10 // ima eden parametar i edna naredba.
console.log(x(5));

let suma = (a, b)=>a+b
console.log(suma(5,5))

let proizvod = (a,b)=>{
    console.log(a*b)
    console.log("Zdravou")
}

console.log(proizvod(5,66));
console.log(x(55))
console.log(suma(66,9));


let globalNum = 10

function checkScope (){
    console.log(globalNum)
}
checkScope()
console.log(checkScope);

var broj1 = 150
var broj2 = 150
var broj3 = 45

if (broj1>broj2){
    console.log(broj1+ " e pogolem");}

    else if (broj2>broj1){
    console.log(broj2 + " e pogolem")
}
    else if (broj2===broj1){
    console.log("Ednakvi")
}

function pogolemBroj (br1, br2) {
    if(br1 > br2){
        console.log(br1+ " e pogolem od"+ br2)
    }else if (br2>br1){
            console.log(br2 + "e pogolem od" + br1)
        }
        else {console.log("ednakvi")}
    }

    pogolemBroj(10,40);
    pogolemBroj(100,40);
    pogolemBroj(100,100);

    //Nizi/listi

var niza = new Array(1,2,3,4,suma(5,5))

console.log(niza);

var niza1 =[1,2,5,4,suma(5,5),niza]
console.log(niza1)

var ovosja = ["orange","banana","lime","apple","cherry","strawberry"]

console.log(ovosja[2]);

let idx = 3

console.log(ovosja[idx])


//pop -> se koristi za brisenje na posledniot element od nizata

let lastElem = ovosja.pop()

console.log(lastElem)
console.log(ovosja)

//push -> Dodava element na krajot na nizata.

ovosja.push("Kiwi")
ovosja.push(lastElem)
console.log(ovosja);

//Shift -> go brishe prviot element na nizata

let shiftElem = ovosja.shift();
ovosja.push(shiftElem);
console.log(shiftElem);
console.log(ovosja);

//unShift -> Dodavanje element na prv index na nizata.

ovosja.unshift("Melone");
console.log(ovosja)

//toString -> prikaz na site elementi od niza oddeleni so zapirka.

console.log(ovosja.toString())

//Slice -> prikaz na del od nizata kade sto prviot parametar odreduva od kade pocnuva toj prikaz, avtoriot kade zavrsuva.

console.log(ovosja.slice(2,5).toString());

//Splice -> brise ili zamenuva odreden element so drug. se koristi so 2 paramentri, prviot e od koj element, vtoriot parametar e kolku elementi od toj element da izbrise.

console.log(ovosja.splice(3,2))

//splice so 3 ili povekje parametri se koristi za koga sakame da dodademe nekoj element. Prviot parametar oznachuva od koj element pocnuvame, vtoriot parametar prikazuva do koj element sakame da se izvede toa dodavanje. Tretiot parametar e toa shto go dodavame.

console.log(ovosja.splice(2,0,"peach"))
console.log(ovosja)

//Includes -> Proveruva dali nekoj elemnt postoi vo nizata ili ne.

console.log(ovosja.includes("banana"));

//sort -> SLuzi da se sortira listata prvo po broevi, pa alfabetski.

console.log(ovosja.sort());

//concat - Spojuva dve nizi, dodenata niza ja spojuva na kraj.

let broevi = [1,2,3,4]

let novaniza = ovosja.concat(broevi);
console.log(ovosja)

console.log(novaniza)

//join > gi pecati vo string elementite od nizata, oddeleni so nash separator.

console.log(novaniza.join(" "));

//funkcii za stringovi

let example = "Semos Edukacija"

//substring -> slice za stringovi, odnosno go prikazuva stringot od nekoj parametar shto go dodeluvame nie.

console.log(example.substring(2,6));
console.log(example.substr(2,6));

// vo substr vtoriot parametar e namesto do kade da ide, koja da bide dolzinata

//replace - Zamena na del od string. Prviot parametar shto go vnesuvame oznachuva koj del od stringot sakame da go zamenime, vtoriot e zamenata.

console.log(example.replace("Edukacija","education"));

//trim - gi brishe praznite mesta na kraevite na nekoj string.

let test = example.trim();
console.log(example, test);
