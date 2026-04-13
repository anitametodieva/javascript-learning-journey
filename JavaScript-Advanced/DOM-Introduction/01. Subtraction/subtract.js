function subtract() {
    const firstInputRef = document.getElementById("firstNumber");
    const firstNum = Number(firstInputRef.value);

    const secondInputRef = document.getElementById("secondNumber");
    const secondNum = Number(secondInputRef.value);

    let sum = firstNum - secondNum;
    document.getElementById("result").textContent = sum;
}