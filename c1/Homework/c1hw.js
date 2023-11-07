
let num = Math.floor((Math.random() * 10))

if (num == 1) {
    console.log(num + " - Your capability is matched only by your impatience, you must learn to balance yourself");}
else if (num == 2) {
    console.log(num + " - You know what needs to be done, the rest is up to you")}
    else if (num == 3) {
        console.log( num + " - A free spirit, remain vigilant as to not get swept by the winds")
    }
    else if (num == 4) {
        console.log(num + " - Bad luck follows you, in turn, shielding all your closest from it")
    }
    else if (num >= 5) {
        console.log(num + " - TBD xd")
    }

    for (var i = 1; i < 101; i++) {
        if (i % 15 == 0) console.log("FizzBuzz");
        else if (i % 3 == 0) console.log("Fizz");
        else if (i % 5 == 0) console.log("Buzz");
        else console.log(i);
    }
    
    
    let a = 10
    let b = 15
    let c = 23
    let d = 8
    let e = 13
    let f = 21
    let g = 3
    
    console.log(a+b-c/d*e+f+g)
    console.log(b+c-d/e*f+g+a)
    console.log(c+d-e/f*g+a+b)
    console.log(d+e-f/g*a+b+c)
    console.log(e+f-g/a*b+c+d)
    console.log(f+g-a/b*c+d+e)
    console.log(g+a-b/c*d+e+f)
    console.log(g+c-f/e*d+b+a)
    console.log(g+a-d/c*f+e+b)
    console.log(g+f-e/d*c+b+a)
    console.log(g+a-e/b*c+d+f)
    
    
    for (i=1; i<101; i++) {
        if(i>=90&& i <=100){
    
            console.log("Great")
        }
            else if (i>=80&& i <90)
            {
                console.log("Still Great")
            }
            else if (i>=70&& i <80)
            {
                console.log("Still pretty good")
            }
            else if (i>=60&& i <70)
            {
                console.log("Alright")
    
            };
        }    