//html elements selectors 
//calculator parts
const display = document.getElementById("display")
//functions
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
//operators
const division = document.getElementById("division");
const moltiplication = document.getElementById("moltiplication");
const subtraction = document.getElementById("subtraction");
const totalBtn = document.getElementById("total");
const addition = document.getElementById("addition");
//paragraphs 
const displayInput = document.getElementById("displayInput");
const displayResult = document.getElementById("displayResult");
displayResult.textContent = 0;

var operatorClicked = false;
let resultByOperator = false;
var totalByOperator = false;
var additionClicked = false;
var subtractionClicked = false;
var moltiplicationClicked = false;
var divisionClicked = false;
var totalClicked = false;
var firstStringNum = "";
var secondStringNum = "";
var firstNum = 0;
var secondNum = 0;
var operator;
var result = "";

function getStrings(value) {
    if(operatorClicked === false){
        if(totalClicked === true) {
            firstStringNum = "";
            totalClicked = false;
        }    
        firstStringNum += value;
        displayInput.textContent = firstStringNum;
    }
    else {
        secondStringNum += value;   
        displayInput.textContent += value; 
    }
    getNums()
}

function getNums() {
    firstNum = Number(firstStringNum)
    secondNum = Number(secondStringNum)
}

function getOperator(value) {
    if(operatorClicked === true) {  
        resultByOperator = true;
        getResult()
    }
    
    switch(value) {
        case "+":
            operator = value;
            break;
        case "-":
            operator = value;
            break;
        case "x":
            operator = value;
            break;
        case "/":
            operator = value;
            break;
    }    
    operatorClicked = true;
    let displayInputLength = displayInput.textContent.length;
    if(displayInputLength > 0 && displayInput.textContent[displayInputLength - 1] !== "+" && displayInput.textContent[displayInputLength - 1] !== "-" && displayInput.textContent[displayInputLength - 1] !== "x" && displayInput.textContent[displayInputLength - 1] !== "/") {
        if(displayInput.textContent[displayInputLength -1] === "=") {
            displayInput.textContent = result ;
        }
        displayInput.textContent += operator;
    }   
}

function add(a,b) {
    return a + b;
}
function subtract(a,b) {
    return a - b;
}
function multiply(a,b) {
    return a * b;
}
function divide(a,b) {
    return a / b;
}

totalBtn.addEventListener("click", () => {
    totalClicked = true;
    getResult();
})

function getResult() { 
    switch(operator){
        case "+":
            result = add(firstNum, secondNum)
            break;
        case "-":
            result = subtract(firstNum, secondNum)
            break;
        case "x":
            result = multiply(firstNum, secondNum)
            break;
        case "/":
            result = divide(firstNum, secondNum) 
            break;
        default:
            result = firstNum;
    }
    roundResult() 

    if(resultByOperator === true) {
        secondNum = 0;
    }

    if(secondStringNum === "") {
         displayInput.textContent = firstNum;
    }
    else {
        displayInput.textContent = firstNum + operator + secondNum + "=";
    }
    

    if(result === Infinity || result === NaN) {
        displayResult.textContent = "I see you ";
        result = 0;
    }
    else { 
        displayResult.textContent = result;
    }

    firstNum = result;
    firstStringNum = result;
    secondStringNum = "";
    operator = "";
    operatorClicked = false;
    resultByOperator = false;
}

function roundResult() {
    result = result.toString()
    if(result.length > 12) {
        result = result.slice(0, 12)
    }
    result = Number(result);
}

function clearDisplay() {
    displayInput.textContent = "";
    displayResult.textContent = 0;
    firstStringNum = "";
    secondStringNum = "";
    result = 0;
    getNums();
}

function deleteLastNum() {
    let displayInputLength = displayInput.textContent.length - 1;
    let firstStringNumLength = firstStringNum.length - 1;
    let secondStringNumLength = secondStringNum.length - 1;
    if(displayInput.textContent[displayInputLength] === secondStringNum[secondStringNumLength]) {
        secondStringNum = secondStringNum.slice(0, secondStringNumLength);
    }
    else if(displayInput.textContent[displayInputLength] === operator) {
        operator = "";
        operatorClicked = false;
    }
    else if(displayInput.textContent[displayInputLength] === firstStringNum[firstStringNumLength]) {
        firstStringNum = firstStringNum.slice(0, firstStringNumLength);
    }
    displayInput.textContent = displayInput.textContent.slice(0, displayInputLength)
    getNums()
}
















































































