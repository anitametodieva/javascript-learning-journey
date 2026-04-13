function addItem() {
    const selectRef = document.getElementById("menu");
    const textRef = document.getElementById("newItemText");
    const valueRef = document.getElementById("newItemValue");

    const value = valueRef.value;
    const textContent = textRef.value;

    if(!value || !textContent){
        return;
    }

    const option = document.createElement("option");
    option.value = value;
    option.textContent = textContent;

    selectRef.appendChild(option);
    textRef.value = "";
    valueRef.value = "";
}