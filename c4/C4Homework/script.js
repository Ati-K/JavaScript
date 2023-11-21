// var niza = [10,55,69,420,888,515]
// var temp = 0
// if (niza%2==0) {
//     for(i=0; i<niza.length;i++)
//     {
// console.log(niza[i])

//     }
// }


let cities1 = [
{
    
}
]

var cities = [{name:"Ahmedabad",population:7681000}, {name:"Alexandria",population:5086000},{name:"Atlanta",population:5572000}, 
{name:"Baghdad",population:6812000},
{name:"Bangalore",population:11440000},
{name:"Bangkok",population:10156000},
{name:"Barcelona",population:5494000},
{name:"Beijing",population:19618000},
{name:"Belo Horizonte",population:5972000},

]

var cityPopulation = cities.map(cities=>cities.population)

var cityNames = cities.map(cities=>cities.name)

let sortByPopulation = cities.sort((c2, c1) => (c2.population < c1.population) ? 1 : (c2.population > c1.population) ? -1 : 0);
console.log(sortByPopulation); // SORT BY POPULATION

var avgPopulation = cityPopulation.reduce(
    (acc,curr)=>(acc+curr)/cityPopulation.length
    )
    console.log(avgPopulation)
 // AVG POPULATION

let = topThreePopulated = () => {
    console.log(sortByPopulation.slice(0,3));
}

topThreePopulated() 

//TOP THREE POPULATION

let citiesA = cities.filter(cities => cities.name.startsWith('A') && cities.population > 1000000);

console.log("Cities starting on A with a population bigger than 1 mil" ,citiesA.map(city=>city.name))
// CITIES ON A + 1 MIL