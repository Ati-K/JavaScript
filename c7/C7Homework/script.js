window.onload = function(){

let books = [
    {Book:"A Song of Ice And Fire",Author:"George R.R. Martin.",Released:"01-08-1996",},
    {Book:"Of Mice and Men",Author:"John Steinbeck",Released:"02-06-1937",},
    {Book:"War and Peace",Author:"Lev Tolstoy",Released:"XX-XX-1865", },
]

function createTable(array, caption){
    let table = document.createElement("table")
    let tableCaption = document.createElement("caption")
    table.setAttribute("id", "myTable")
    table.appendChild(tableCaption) 

    let firstRowObject = array[0]

    let firstRow = document.createElement("tr")

    for(key in firstRowObject) {
let th = document.createElement("th")
th.innerText=key
 firstRow.appendChild(th)
}
table.appendChild(firstRow)

for(element of array){

    let tr = document.createElement("tr")
    for(key in firstRowObject)
    {
        let td=document.createElement("td")
        td.innerText = element[key]
        tr.appendChild(td)
    }
    table.appendChild(tr)
}
table.setAttribute("border","1px")
document.body.appendChild(table)
}
createTable(books,"Books")

function myDeleteFunction() {
    }
    document.querySelector('button').addEventListener('click', () => {
    document.getElementById('myTable').deleteRow(1)
});
}