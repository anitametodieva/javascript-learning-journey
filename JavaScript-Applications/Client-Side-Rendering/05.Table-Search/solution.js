function solve() {
    const url = 'http://localhost:3030/jsonstore/advanced/table';

    const tbody = document.querySelector('tbody');
    const input = document.getElementById('searchField');
    const button = document.getElementById('searchBtn');

    loadData();

    button.addEventListener('click', onClick);

    async function loadData() {
        const res = await fetch(url);
        const data = await res.json();

        Object.values(data).forEach(item => {
            const tr = document.createElement('tr');

            const tdName = document.createElement('td');
            tdName.textContent = item.firstName + ' ' + item.lastName;

            const tdEmail = document.createElement('td');
            tdEmail.textContent = item.email;

            const tdCourse = document.createElement('td');
            tdCourse.textContent = item.course;

            tr.appendChild(tdName);
            tr.appendChild(tdEmail);
            tr.appendChild(tdCourse);

            tbody.appendChild(tr);
        });
    }

    function onClick() {
        const searchText = input.value.toLowerCase();

        const rows = Array.from(document.querySelectorAll('tbody tr'));

        rows.forEach(row => row.classList.remove('select'));

        rows.forEach(row => {
            const cells = Array.from(row.children);

            const match = cells.some(td =>
                td.textContent.toLowerCase().includes(searchText)
            );

            if (match && searchText !== '') {
                row.classList.add('select');
            }
        });

        input.value = '';
    }
}

solve();