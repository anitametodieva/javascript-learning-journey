const url = 'http://localhost:3030/jsonstore/advanced/dropdown';

window.addEventListener('load', loadItems);
document.querySelector('form').addEventListener('submit', addItem);

async function loadItems() {
    const res = await fetch(url);
    const data = await res.json();

    const menu = document.getElementById('menu');
    menu.innerHTML = '';

    Object.values(data).forEach(item => {
        const option = document.createElement('option');
        option.value = item._id;
        option.textContent = item.text;

        menu.appendChild(option);
    });
}

async function addItem(event) {
    event.preventDefault();

    const input = document.getElementById('itemText');
    const text = input.value;

    if (text === '') {
        return;
    }

    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
    });

    input.value = '';

    loadItems();
}