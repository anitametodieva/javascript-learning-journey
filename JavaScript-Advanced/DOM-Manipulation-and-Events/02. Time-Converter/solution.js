function attachEventsListeners() {
    const btnRef = document.querySelectorAll("input[type= 'button']");

    btnRef.forEach(btn => btn.addEventListener("click", onClick));

    function onClick(event){
        const currentTarget = event.currentTarget;
        const parent = currentTarget.parentElement;
        const inputRef = parent.children[1];

        const units = inputRef.id;
        const value = Number(inputRef.value);

        switch(units){
            case "days": propagateNewValue(value); break;
                case "hours": propagateNewValue(value / 24); break;
                    case "minutes": propagateNewValue(value / 24 / 60); break;
                        case "seconds": propagateNewValue(value / 24 / 60 / 60); break;
        }
    }

    function propagateNewValue(days){
        const inputsRef = document.querySelectorAll("input[type= 'text']");
        inputsRef[0].value = days;
        inputsRef[1].value = days * 24;
        inputsRef[2].value = days * 24 * 60;
        inputsRef[3].value = days * 24 * 60 * 60;
    }
}