function attachEvents()  {

const BASE_URL = 'http://localhost:3030/jsonstore/messenger';

const textAreaRef = document.getElementById('messages');
const nameRef = document.querySelector('input[name="author"]');
const messageRef = document.querySelector('input[name="content"]');
    document.getElementById('submit').addEventListener('click', onSubmit);
    document.getElementById('refresh').addEventListener('click', onLoad);


async function onSubmit(e) {
    const name = nameRef.value;
    const msg = messageRef.value;

    nameRef.value = "";
    messageRef.value = "";

    if (!name || !msg) return;

    const data = { author: name, content: msg };

    const option = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }

    const res = await fetch(BASE_URL, option);

    onLoad();
}

async function onLoad(e) {
    
    textAreaRef.value = '';
    const res = await fetch(BASE_URL);
    const data = await res.json();
    const result = Object.values(data)
        .map(msg => `${msg.author}: ${msg.content}`)
        .join('\n');

        textAreaRef.value = result;
}

}

attachEvents();

