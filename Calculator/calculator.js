const numberbuttons = document.querySelectorAll(".number");
const clearAll = document.querySelector(".clear-all");
const clearEntry = document.querySelector(".clear-entry");
const equal = document.querySelector(".equal");
const displayOperation = document.querySelector(".operation");
const result = document.querySelector(".result");
const operators = document.querySelectorAll(".operator");


numberbuttons.forEach(button => {
    button.addEventListener("click", () => {
            displayOperation.textContent += button.textContent;
    });
});

clearAll.addEventListener("click", () => {
    displayOperation.textContent = "";
    result.textContent = "0";
});

clearEntry.addEventListener("click", () => {
    let operation = displayOperation.textContent;
    operation = operation.slice(0,-1);
    displayOperation.textContent = operation;
    console.log(operation);
});


operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        if (/[+\-*.\/]/.test(displayOperation.textContent.slice(-1))) {
            return
        } else {
            displayOperation.textContent += operator.textContent;
        }
    });
});

equal.addEventListener("click", () => {
    let operation  = displayOperation.textContent;
    try {
        if (operation.includes("/0")) {
            throw new Error("Cannot divide by 0")
        }

        operation = new Function('return ' + operation);
        result.textContent = operation(); 

    } catch (error) {
        alert(error)   
    }
});


