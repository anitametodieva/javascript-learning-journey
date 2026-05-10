function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/collections/students';

    const tbody = document.querySelector('#results tbody');

    const firstNameInput = document.querySelector('input[name="firstName"]');
    const lastNameInput = document.querySelector('input[name="lastName"]');
    const facultyNumberInput = document.querySelector('input[name="facultyNumber"]');
    const gradeInput = document.querySelector('input[name="grade"]');

    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', createStudent);

    loadStudents();

    async function loadStudents() {
        tbody.innerHTML = '';

        const res = await fetch(url);
        const data = await res.json();

        Object.values(data).forEach(student => {
            const tr = document.createElement('tr');

            tr.innerHTML = `
                <td>${student.firstName}</td>
                <td>${student.lastName}</td>
                <td>${student.facultyNumber}</td>
                <td>${student.grade}</td>
            `;

            tbody.appendChild(tr);
        });
    }

    async function createStudent(e) {
        e.preventDefault();

        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const facultyNumber = facultyNumberInput.value;
        const grade = gradeInput.value;

        if (!firstName || !lastName || !facultyNumber || !grade) {
            return;
        }

        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({
                firstName,
                lastName,
                facultyNumber,
                grade
            })
        });

        firstNameInput.value = '';
        lastNameInput.value = '';
        facultyNumberInput.value = '';
        gradeInput.value = '';

        loadStudents();
    }
}

attachEvents();
