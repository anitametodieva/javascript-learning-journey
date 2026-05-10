async function solution() {

    const main = document.getElementById('main');

    const response = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');
    const data = await response.json();

    data.forEach(article => {

        const accordion = document.createElement('div');
        accordion.className = 'accordion';

        accordion.innerHTML = `
        <div class="head">
            <span>${article.title}</span>
            <button class="button" id="${article._id}">More</button>
        </div>
        <div class="extra" style="display:none">
            <p></p>
        </div>
        `;

        const button = accordion.querySelector('button');
        const extra = accordion.querySelector('.extra');
        const paragraph = accordion.querySelector('p');

        button.addEventListener('click', async () => {

            if (button.textContent === 'More') {

                const response = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${article._id}`);
                const data = await response.json();

                paragraph.textContent = data.content;

                extra.style.display = 'block';
                button.textContent = 'Less';

            } else {

                extra.style.display = 'none';
                button.textContent = 'More';

            }

        });

        main.appendChild(accordion);

    });
}

solution();