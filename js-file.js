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
var firstStringNum = "";
var secondStringNum = "";

//adding event listeners
//numbers
seven.addEventListener("click", (e) => {
    e.target.value = "7"; //gives the button eight the value of "8"
    if(additionClicked === false && subtractionClicked === false && moltiplicationClicked === false && divisionClicked === false) { "condition to check if the first string has been declared or not"
        getFirstString(e.target.value)
    }
    else if(additionClicked === true || subtractionClicked === true || moltiplicationClicked === true || divisionClicked === true){ "condition to check if the second string has been declared or not"
        getSecondString(e.target.value)
    }
});
eight.addEventListener("click", (e) => {
    e.target.value = "8"; //gives the button eight the value of "8"
    if(additionClicked === false && subtractionClicked === false && moltiplicationClicked === false && divisionClicked === false) { "condition to check if the first string has been declared or not"
        getFirstString(e.target.value)
    }
    else if(additionClicked === true || subtractionClicked === true || moltiplicationClicked === true || divisionClicked === true){ "condition to check if the second string has been declared or not"
        getSecondString(e.target.value)
    }
});
nine.addEventListener("click", (e) => {
    e.target.value = "9"; //gives the button eight the value of "8"
    if(additionClicked === false && subtractionClicked === false && moltiplicationClicked === false && divisionClicked === false) { "condition to check if the first string has been declared or not"
        getFirstString(e.target.value)
    }
    else if(additionClicked === true || subtractionClicked === true || moltiplicationClicked === true || divisionClicked === true){ "condition to check if the second string has been declared or not"
        getSecondString(e.target.value)
    }
});
four.addEventListener("click", (e) => {
    e.target.value = "4"; //gives the button eight the value of "8"
    if(additionClicked === false && subtractionClicked === false && moltiplicationClicked === false && divisionClicked === false) { "condition to check if the first string has been declared or not"
        getFirstString(e.target.value)
    }
    else if(additionClicked === true || subtractionClicked === true || moltiplicationClicked === true || divisionClicked === true){ "condition to check if the second string has been declared or not"
        getSecondString(e.target.value)
    }
});
five.addEventListener("click", (e) => {
    e.target.value = "5"; //gives the button eight the value of "8"
    if(additionClicked === false && subtractionClicked === false && moltiplicationClicked === false && divisionClicked === false) { "condition to check if the first string has been declared or not"
        getFirstString(e.target.value)
    }
    else if(additionClicked === true || subtractionClicked === true || moltiplicationClicked === true || divisionClicked === true){ "condition to check if the second string has been declared or not"
        getSecondString(e.target.value)
    }
});
six.addEventListener("click", (e) => {
    e.target.value = "6"; //gives the button eight the value of "8"
    if(additionClicked === false && subtractionClicked === false && moltiplicationClicked === false && divisionClicked === false) { "condition to check if the first string has been declared or not"
        getFirstString(e.target.value)
    }
    else if(additionClicked === true || subtractionClicked === true || moltiplicationClicked === true || divisionClicked === true){ "condition to check if the second string has been declared or not"
        getSecondString(e.target.value)
    }
});
one.addEventListener("click", (e) => {
    e.target.value = "1"; //gives the button eight the value of "8"
    if(additionClicked === false && subtractionClicked === false && moltiplicationClicked === false && divisionClicked === false) { "condition to check if the first string has been declared or not"
        getFirstString(e.target.value)
    }
    else if(additionClicked === true || subtractionClicked === true || moltiplicationClicked === true || divisionClicked === true){ "condition to check if the second string has been declared or not"
        getSecondString(e.target.value)
    }
});
two.addEventListener("click", (e) => {
    e.target.value = "2"; //gives the button eight the value of "8"
    if(additionClicked === false && subtractionClicked === false && moltiplicationClicked === false && divisionClicked === false) { "condition to check if the first string has been declared or not"
        getFirstString(e.target.value)
    }
    else if(additionClicked === true || subtractionClicked === true || moltiplicationClicked === true || divisionClicked === true){ "condition to check if the second string has been declared or not"
        getSecondString(e.target.value)
    }
});
three.addEventListener("click", (e) => {
    e.target.value = "3"; //gives the button eight the value of "8"
    if(additionClicked === false && subtractionClicked === false && moltiplicationClicked === false && divisionClicked === false) { "condition to check if the first string has been declared or not"
        getFirstString(e.target.value)
    }
    else if(additionClicked === true || subtractionClicked === true || moltiplicationClicked === true || divisionClicked === true){ "condition to check if the second string has been declared or not"
        getSecondString(e.target.value)
    }
});
zero.addEventListener("click", (e) => {
    e.target.value = "0"; //gives the button eight the value of "8"
    if(additionClicked === false && subtractionClicked === false && moltiplicationClicked === false && divisionClicked === false) { "condition to check if the first string has been declared or not"
        getFirstString(e.target.value)
    }
    else if(additionClicked === true || subtractionClicked === true || moltiplicationClicked === true || divisionClicked === true){ "condition to check if the second string has been declared or not"
        getSecondString(e.target.value)
    }
});

//operators
addition.addEventListener("click", (e) => {
    additionClicked = true;                  
})
subtraction.addEventListener("click", (e) => {
    subtractionClicked = true;
})
moltiplication.addEventListener("click", (e) => {
    moltiplicationClicked = true;
})
division.addEventListener("click", (e) => {
    divisionClicked = true;
})

function getFirstString(numValue) {
    firstStringNum += numValue;
    firstNum = Number(firstStringNum);
    console.log(`prima stringa: ${firstStringNum}`)
}

function getSecondString(numValue) {
    secondStringNum += numValue;
    secondNum = Number(secondStringNum);
    console.log(`seconda stringa: ${secondStringNum}`)
}

total.addEventListener("click", () =>{
    getResult()
})

function getResult() {
    if(additionClicked === true) { 
        result = firstNum + secondNum;
        console.log(result)
        firstNum = result;
        firstStringNum = "";
        additionClicked = false;       
    }
    else if(subtractionClicked === true) {
        result = firstNum - secondNum;
        console.log(result)
        firstNum = result;
        firstStringNum = "";
        subtractionClicked = false; 
    }
    else if(moltiplicationClicked === true) {
        result = firstNum * secondNum;
        console.log(result)
        firstNum = result;
        firstStringNum = "";
        moltiplicationClicked = false; 
    }   
    else if(divisionClicked === true) {
        result = firstNum / secondNum;
        console.log(result)
        firstNum = result;
        firstStringNum = "";
        divisionClicked = false; 
    }
    secondStringNum = "";    
}

