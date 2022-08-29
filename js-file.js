//html elements selectors 
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const division = document.getElementById("division");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const moltiplication = document.getElementById("moltiplication");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3")
const subtraction = document.getElementById("subtraction");
const dot = document.getElementById(".")
const zero = document.getElementById("0");
const total = document.getElementById("total");
const addition = document.getElementById("addition"); 
var additionClicked = false;
var subtractionClicked = false;
var moltiplicationClicked = false;
var divisionClicked = false;
var totalClicked = false;
var firstStringNum = "";
var secondStringNum = "";
var firstNum = 0;
var secondNum;
var result;

//operators
addition.addEventListener("click", (e) => {
    additionClicked = true;   
});
subtraction.addEventListener("click", (e) => {
    subtractionClicked = true;
})
moltiplication.addEventListener("click", (e) => {
    moltiplicationClicked = true;
})
division.addEventListener("click", (e) => {
    divisionClicked = true;
})

function getFirstString(value) {
    if(additionClicked === false && subtractionClicked === false && moltiplicationClicked === false && divisionClicked === false) { "condition to check if the first string has been declared or not"
        firstStringNum += value;
        firstNum = Number(firstStringNum);
        console.log(`primo num: ${firstNum}`)
    }
    else if(additionClicked === true || subtractionClicked === true || moltiplicationClicked === true || divisionClicked === true){ "condition to check if the second string has been declared or not"
        getSecondString(value)
    }
}

function getSecondString(value) {
    secondStringNum += value;
    secondNum = Number(secondStringNum);
    console.log(`secondo num: ${secondNum}`)
}

total.addEventListener("click", () =>{
    totalClicked = true;
    getResult()
})

function getResult() {
    if(additionClicked === true) { 
        result = firstNum + secondNum;
        additionClicked = false;       
    }
    else if(subtractionClicked === true) {
        result = firstNum - secondNum;
        subtractionClicked = false; 
    }
    else if(moltiplicationClicked === true) {
        result = firstNum * secondNum;
        moltiplicationClicked = false; 
    }   
    else if(divisionClicked === true) {
        result = firstNum / secondNum;
        divisionClicked = false; 
    }  
    console.log(result)
    firstNum = result;
    firstStringNum = "";
    secondStringNum = "";    
}

