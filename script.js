/*
  HTML elements
*/
let displaySmallEl = document.getElementById("result__small");
let displayBigEl = document.getElementById("result__big");

const btnClear = document.getElementById("btn__C");
const btnSign = document.getElementById("btn__sign");
const btnDel = document.getElementById("btn__del");
const btnDiv = document.getElementById("btn__/");

const btn7 = document.getElementById("btn__7");
const btn8 = document.getElementById("btn__8");
const btn9 = document.getElementById("btn__9");
const btnMult = document.getElementById("btn__x");

const btn4 = document.getElementById("btn__4");
const btn5 = document.getElementById("btn__5");
const btn6 = document.getElementById("btn__6");
const btnSub = document.getElementById("btn__-");

const btn1 = document.getElementById("btn__1");
const btn2 = document.getElementById("btn__2");
const btn3 = document.getElementById("btn__3");
const btnAdd = document.getElementById("btn__+");

const btn0 = document.getElementById("btn__0");
const btnDot = document.getElementById("btn__.");
const btnEqual = document.getElementById("btn__=");

/*
  Consts and vars
*/

let numConstructor = ""; // Aux variable to hold digits until form the desired number
let numAccumulator = 0; // Hold first number

let opSign = "" // Num positive or negative
let opSymbol = ""; // Operation symbol
let opResult = 0; // Final result

/*
  Functions
*/

// Display functions
const displayResultSmall = (display) => { displaySmallEl.textContent = display };
const displayResultBig = (display) => { displayBigEl.textContent = display };

// Utils functions
const appendDigit = (number) => {
    numConstructor += number.toString();
    displayResultBig(numConstructor);
};
const setOperation = (symbol) => {
    opSymbol = symbol;
    
    displayResultSmall(opSign + numConstructor);
    displayResultBig("0");
    
    numAccumulator = parseFloat(opSign + numConstructor)
    numConstructor = ""
}

// Calculator functions
const clear = () => {
    // Reset every value
    numConstructor = "";
    numAccumulator = 0;
    opSymbol = "";
    opResult = 0;

    // Reset display
    displayResultBig(0);
    displayResultSmall(0);
}
const addDot = () => {
    // Check if number contains already a dot and is not the first char
    if( !numConstructor.includes(".") && numConstructor.length > 1 ) {
        numConstructor += "."
        displayResultBig(numConstructor)
    }
}
const switchSign = () => {
    // If positive
    if(opSign == "") {
        opSign = "-";
    } else {
        opSign = "";
    }

    displayResultBig(opSign + numConstructor);
}
const deleteDigit = () => {
    if(numConstructor.length > 1) {
        numConstructor = numConstructor.slice(0, -1);
    } else {
        numConstructor = "0";
    }

    displayResultBig(numConstructor);
}
const calculate = () => {
    switch (opSymbol) {
        case '+':
            opResult = numAccumulator + parseFloat(numConstructor);
            break;
    
        case '-':
            opResult = numAccumulator - parseFloat(numConstructor);
            break;
        
        case 'x':
            opResult = numAccumulator * parseFloat(numConstructor);
            break;
        
        case '/':
            opResult = numAccumulator / parseFloat(numConstructor);
            break;
        default:
            break;
    }

    // Remove decimals in int results
    if(Number.isInteger(opResult)) {
        opResult = parseInt(opResult)
    }

    // Display to screen
    displayResultSmall("0");
    displayResultBig(opResult);

    // Hold result for next operation
    numConstructor = opResult.toString();
}

/*
  Event listeners
*/
btnClear.addEventListener('click', (e) => {clear()});
btnSign.addEventListener('click', (e) => {switchSign()});
btnDel.addEventListener('click', (e) => {deleteDigit()});
btnDiv.addEventListener('click', (e) => {setOperation("/")});

btn7.addEventListener('click', (e) => {appendDigit(7)});
btn8.addEventListener('click', (e) => {appendDigit(8)});
btn9.addEventListener('click', (e) => {appendDigit(9)});
btnMult.addEventListener('click', (e) => {setOperation("x")});

btn4.addEventListener('click', (e) => {appendDigit(4)});
btn5.addEventListener('click', (e) => {appendDigit(5)});
btn6.addEventListener('click', (e) => {appendDigit(6)});
btnSub.addEventListener('click', (e) => {setOperation("-")});

btn1.addEventListener('click', (e) => {appendDigit(1)});
btn2.addEventListener('click', (e) => {appendDigit(2)});
btn3.addEventListener('click', (e) => {appendDigit(3)});
btnAdd.addEventListener('click', (e) => {setOperation("+")});

btn0.addEventListener('click', (e) => {appendDigit(0)});
btnDot.addEventListener('click', (e) => {addDot()});
btnEqual.addEventListener('click', (e) => {calculate()});