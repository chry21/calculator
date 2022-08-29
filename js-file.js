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
var firstStringNum = "";
var secondStringNum = "";
let stringNumber;

//adding event listeners
console.log(additionClicked)

//seven.addEventListener("click", getFirstString);
eight.addEventListener("click", (e) => {
    
    e.target.value = "8"
    if(additionClicked === false) {
        getFirstString(e.target.value)
    }
    else {
        getSecondString(e.target.value)
    }
});
nine.addEventListener("click", (e) => {
    e.target.value = "9"
    getFirstString(e.target.value)
});
four.addEventListener("click", (e) => {
    e.target.value = "4"
    getFirstString(e.target.value)
});
five.addEventListener("click", (e) => {
    e.target.value = "5"
    getFirstString(e.target.value)
});
six.addEventListener("click", (e) => {
    e.target.value = "6"
    getFirstString(e.target.value)
});
one.addEventListener("click", (e) => {
    e.target.value = "1"
    getFirstString(e.target.value)
});
two.addEventListener("click", (e) => {
    e.target.value = "2"
    getFirstString(e.target.value)
});
three.addEventListener("click", (e) => {
    e.target.value = "3"
    getFirstString(e.target.value)
});
zero.addEventListener("click", (e) => {
    e.target.value = "0"
    getFirstString(e.target.value)
});
addition.addEventListener("click", (e) => {
    additionClicked = true;
})
total.addEventListener("click", getResult)

function getFirstString(numValue) {
    firstStringNum += numValue;
    console.log(`prima stringa: ${firstStringNum}`)
}

function getSecondString(numValue) {
    secondStringNum += numValue;
    console.log(`seconda stringa: ${secondStringNum}`)
}

function getResult() {
    result = Number(firstStringNum) + Number(secondStringNum)
    console.log(result)
    firstStringNum = result;
    secondStringNum = "";
}

/*

    addition.addEventListener("click", () => {
        operator("+");
        stringNumber ="";
        
    });
    subtraction.addEventListener("click", () => {
        operator("-");
    });
    moltiplication.addEventListener("click", () => {
        operator("*");
    });
    division.addEventListener("click", () => {
        operator("/");
    });
}
  
//subtraction.addEventListener("click", )
//moltiplication.addEventListener("click", )
//division.addEventListener("click", )
//equal.addEventListener("click", )
//dot.addEventListener("click", )
//clearBtn.addEventListener("click", )
//deleteBtn.addEventListener("click", )

function operator(type) {
    if(secondStringNumber === "") {
       firstStringNumber = stringNumber; 
    }
    else {
        firstStringNumber = result;
    }
    seven.addEventListener("click", () => {
        secondStringNumber += "7"
    });
    eight.addEventListener("click", () => {
        secondStringNumber += "8"
    });
    nine.addEventListener("click", () => {
        secondStringNumber +="9"
    });
    four.addEventListener("click", () => {
        secondStringNumber +="4"
    });
    five.addEventListener("click", () => {
        secondStringNumber +="5"
    });
    six.addEventListener("click", () => {
        secondStringNumber +="6"
    });
    one.addEventListener("click", () => {
        secondStringNumber +="1"
    });
    two.addEventListener("click", () => {
        secondStringNumber +="2"
    });
    three.addEventListener("click", () => {
        secondStringNumber +="3";
    });
    zero.addEventListener("click", () => {
        secondStringNumber += "0";
    });
    total.addEventListener("click", () => {
        console.log(secondStringNumber)
        getTotal(type)
        secondStringNumber ="";
    }); 
}

function getTotal(type) {
    console.log(firstStringNumber)
    if(type === "+") {
       result = Number(firstStringNumber) + Number(secondStringNumber);
    }
    else if(type === "-") {
        result = Number(firstStringNumber) - Number(secondStringNumber);
    }
    else if(type === "*") {
        result = Number(firstStringNumber) * Number(secondStringNumber);
    }
    else {
        result = Number(firstStringNumber) / Number(secondStringNumber);
    }
    console.log(result)
    
    
}



*/
