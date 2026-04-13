function validateEmail() {
    const input = document.getElementById('email');
    const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

    input.addEventListener('change', function () {
        if (!pattern.test(input.value)) {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
}