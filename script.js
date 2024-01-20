let buttonsEl = document.getElementsByClassName("button");
let buttonsArray = Array.from(buttonsEl);
let numericEl = document.getElementsByClassName("numeric");
let numericArray = Array.from(numericEl);
let displayEl = document.getElementById("display");

let operatorEl = document.getElementsByClassName("operator");
let operatorArray = Array.from(operatorEl);

let currentOperand = "";
let previousOperator = "";
let currentOperator = "";
let previousOperand = "";
let operand2 = "";
let result = "";

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", function () {
    buttonsEl[i].style.scale = "1.1";
    setTimeout(function () {
      buttonsEl[i].style.scale = "1";
    }, 200);
    if (buttonsEl[i].innerText == ".") {
      if (displayEl.innerText.includes(".")) {
      } else {
        if (numericArray.includes(buttonsEl[i])) {
          let currentDisplayValue = displayEl.innerText;
          if (["+", "-", "*", "/"].includes(currentDisplayValue)) {
            displayEl.innerText = buttonsEl[i].innerText;
          } else {
            displayEl.innerText =
              displayEl.innerHTML + "" + buttonsEl[i].innerHTML;
          }
          currentOperand = currentOperand + "" + buttonsEl[i].innerHTML;
          if (currentOperand.length > 12) {
            displayEl.innerHTML = "Error";
          }
        }
        if (buttonsEl[i].innerHTML == "A/C") {
          displayEl.innerText = "";
          currentOperand = "";
          currentOperator = "";
          previousOperand = "";
          result = "";
        }
        if (buttonsEl[i].innerHTML == "←") {
          displayEl.innerHTML = Math.floor(displayEl.innerHTML / 10);
          currentOperand = Math.floor(currentOperand / 10);
          console.log(currentOperand);
        }
        if (buttonsEl[i].innerHTML == "+/-") {
          displayEl.innerText = displayEl.innerText * -1;
          currentOperand = currentOperand * -1;
        }
        if (operatorArray.includes(buttonsEl[i])) {
          displayEl.innerText = buttonsEl[i].innerHTML;
          console.log(currentOperator);
          if (currentOperator !== "") {
            previousOperand = eval(
              previousOperand + "" + currentOperator + "" + currentOperand
            );
          } else {
            previousOperand = currentOperand;
          }
          console.log(previousOperand);
          currentOperator = buttonsEl[i].innerHTML;
          currentOperand = "";
        }
        if (buttonsEl[i].innerHTML == "=") {
          if (currentOperator == "%") {
            result = eval((previousOperand / 100) * currentOperand);
            if (result.length > 12) {
              displayEl.innerHTML = "Error";
            }
            displayEl.innerHTML = result;
          } else {
            result = eval(
              previousOperand + " " + currentOperator + " " + currentOperand
            );
            if (result > 999999999999) {
              displayEl.innerHTML = "Error";
            } else {
              displayEl.innerText = result;
            }
          }
          currentOperand = result;
        }
      }
    } else {
      if (numericArray.includes(buttonsEl[i])) {
        let currentDisplayValue = displayEl.innerText;
        if (["+", "-", "*", "/"].includes(currentDisplayValue)) {
          displayEl.innerText = buttonsEl[i].innerText;
        } else {
          displayEl.innerText =
            displayEl.innerHTML + "" + buttonsEl[i].innerHTML;
        }
        currentOperand = currentOperand + "" + buttonsEl[i].innerHTML;
        if (currentOperand.length > 12) {
          displayEl.innerHTML = "Error";
        }
      }
      if (buttonsEl[i].innerHTML == "A/C") {
        displayEl.innerText = "";
        currentOperand = "";
        currentOperator = "";
        previousOperand = "";
        result = "";
      }
      if (buttonsEl[i].innerHTML == "←") {
        displayEl.innerHTML = Math.floor(displayEl.innerHTML / 10);
        currentOperand = Math.floor(currentOperand / 10);
        console.log(currentOperand);
      }
      if (buttonsEl[i].innerHTML == "+/-") {
        displayEl.innerText = displayEl.innerText * -1;
        currentOperand = currentOperand * -1;
      }
      if (operatorArray.includes(buttonsEl[i])) {
        displayEl.innerText = buttonsEl[i].innerHTML;
        console.log(currentOperator);
        if (currentOperator !== "") {
          previousOperand = eval(
            previousOperand + "" + currentOperator + "" + currentOperand
          );
        } else {
          previousOperand = currentOperand;
        }
        console.log(previousOperand);
        currentOperator = buttonsEl[i].innerHTML;
        //   previousOperand = currentOperand;
        currentOperand = "";
      }
      if (buttonsEl[i].innerHTML == "=") {
        if (currentOperator == "%") {
          result = eval((previousOperand / 100) * currentOperand);
          if (result.length > 12) {
            displayEl.innerHTML = "Error";
          }
          displayEl.innerHTML = result;
        } else {
          result = eval(
            previousOperand + " " + currentOperator + " " + currentOperand
          );
          if (result > 999999999999) {
            displayEl.innerHTML = "Error";
          } else {
            displayEl.innerText = result;
          }
        }
        currentOperand = result;
      }
    }
  });
}
