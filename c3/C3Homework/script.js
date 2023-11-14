for (let i = 0; i<50; i++){

    if(i%2!=0)
    {
        console.log(i)
    }
    
}


var brojac = 0

for (let n = 0; n<100; n++){

    if(n%2!=0) {
        brojac++
        if (brojac==2){
            console.log(n)
            brojac=0
        }
    }
}

let x = 3
switch (x) {
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


function funkcija1()
{
    console.log("Simple Function")
}
funkcija1()

let funkcija2 = (x,y)=>x*y
console.log(funkcija2(5,250))

let funkcija3 = (x,y)=>x-y
console.log(funkcija3(5,250))


var cel = 100

var c2f = (9/5)*cel+32

console.log(c2f)

var fahr = 100

var f2c = (fahr-32)*5/9

console.log(f2c)

function temperaturi() {
    var cel = 100
    var fahr = 100
    var f2c = (fahr-32)*5/9
    var c2f = (9/5)*cel+32
    console.log(f2c)
    console.log(c2f)
}
temperaturi()

function f2m(){
    var foot = 50
    var meter = 50
    var meterToFeet = meter*3.28084
    var feetToMeter = foot*0.3048
    console.log(meterToFeet)
    console.log(feetToMeter)
}
f2m()

var gradovi = ["Beograd", "Blagoevgrad", "Golem Grad", "Donji Grad", "Biograd"]

console.log(gradovi)

var drzavi = ["Burundi", "South Sudan", "Somalia", "Democratic Republic of Congo", "Malawi", "Mozambique", "Liberia", "Chad", "Madagascar", "Greece"]
console.log(drzavi)