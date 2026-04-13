function validate() {
    const form = document.getElementById('registerForm');

    const usernameEl = document.getElementById('username');
    const emailEl = document.getElementById('email');
    const passwordEl = document.getElementById('password');
    const confirmPasswordEl = document.getElementById('confirm-password');

    const companyCheckbox = document.getElementById('company');
    const companyInfo = document.getElementById('companyInfo');
    const companyNumberEl = document.getElementById('companyNumber');

    const validBox = document.getElementById('valid');

    companyCheckbox.addEventListener('change', function () {
        if (companyCheckbox.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let isValid = true;

        const usernamePattern = /^[A-Za-z0-9]{3,20}$/;
        const passwordPattern = /^\w{5,15}$/;
        const emailPattern = /^.*@.*\..*$/;

        function mark(el, ok) {
            if (ok) {
                el.style.borderColor = '';
            } else {
                el.style.borderColor = 'red';
                isValid = false;
            }
        }

        mark(usernameEl, usernamePattern.test(usernameEl.value));

        mark(emailEl, emailPattern.test(emailEl.value));

        const passOk = passwordPattern.test(passwordEl.value);
        const confirmOk = passwordPattern.test(confirmPasswordEl.value);
        const matchOk = passwordEl.value === confirmPasswordEl.value;

        const passwordsOk = passOk && confirmOk && matchOk;

        mark(passwordEl, passwordsOk);
        mark(confirmPasswordEl, passwordsOk);

        if (companyCheckbox.checked) {
            const num = Number(companyNumberEl.value);
            const companyOk = num >= 1000 && num <= 9999;
            mark(companyNumberEl, companyOk);
        } else {
            companyNumberEl.style.borderColor = '';
        }

        if (isValid) {
            validBox.style.display = 'block';
        } else {
            validBox.style.display = 'none';
        }
    });
}