function encodeAndDecodeMessages() {
    const textareas = document.querySelectorAll("textarea");
    const buttons = document.querySelectorAll("button");

    const encodeBtn = buttons[0];
    const decodeBtn = buttons[1];
    const sendTextarea = textareas[0];
    const receiveTextarea = textareas[1];

    encodeBtn.addEventListener("click", () => {
        let message = sendTextarea.value;
        let encoded = '';

        for(let char of message){
            encoded += String.fromCharCode(char.charCodeAt(0) + 1);
        }

        receiveTextarea.value = encoded;
        sendTextarea.value = '';
    });

    decodeBtn.addEventListener("click", () => {
        let message = receiveTextarea.value;
        let decoded = '';

        for(let char of message){
            decoded += String.fromCharCode(char.charCodeAt(0) - 1);
        }

        receiveTextarea.value = decoded;
    });
}