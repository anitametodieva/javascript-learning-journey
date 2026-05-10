async function lockedProfile() {
    const main = document.getElementById('main');
    main.innerHTML = '';

    const response = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
    const data = await response.json();

    let counter = 1;

    Object.values(data).forEach(profileData => {
        const profileDiv = document.createElement('div');
        profileDiv.className = 'profile';

        profileDiv.innerHTML = `
            <img src="./iconProfile2.png" class="userIcon">
            <label>Lock</label>
            <input type="radio" name="user${counter}Locked" value="lock" checked>
            <label>Unlock</label>
            <input type="radio" name="user${counter}Locked" value="unlock"><br>
            <hr>
            <label>Username</label>
            <input type="text" name="user${counter}Username" value="${profileData.username}" disabled readonly />
            <div style="display: none;">
                <hr>
                <label>Email:</label>
                <input type="email" name="user${counter}Email" value="${profileData.email}" disabled readonly />
                <label>Age:</label>
                <input type="number" name="user${counter}Age" value="${profileData.age}" disabled readonly />
            </div>
            <button>Show more</button>
        `;

        const button = profileDiv.querySelector('button');
        const hiddenDiv = profileDiv.querySelector('div');

        button.addEventListener('click', () => {
            const unlockRadio = profileDiv.querySelector('input[value="unlock"]');

            if (!unlockRadio.checked) {
                return;
            }

            if (button.textContent === 'Show more') {
                hiddenDiv.style.display = 'block';
                button.textContent = 'Hide it';
            } else {
                hiddenDiv.style.display = 'none';
                button.textContent = 'Show more';
            }
        });

        main.appendChild(profileDiv);
        counter++;
    });
}