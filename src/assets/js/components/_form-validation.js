const namePattern = /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/g;
const phonePattern = /^((\+7)[\- ]?)?(\(?\d\)?[\- ]?){10}$/g;

const requestForm = document.querySelector('.request__form');
const requestFormNameInput = requestForm.querySelector('.name');
const requestFormPhoneInput = requestForm.querySelector('.phone');
const requestFormSubmitBtn = requestForm.querySelector('.form__submit');

const requestFormSuccess = new Set();
requestFormSubmitBtn.disabled = true;

requestFormNameInput.addEventListener('input', (e) => {
    checker(
        requestFormSuccess,
        requestFormSubmitBtn,
        e.target.value,
        requestFormNameInput,
        namePattern,
        'Не корректное имя'
    );
});

requestFormPhoneInput.addEventListener('input', (e) => {
    checker(
        requestFormSuccess,
        requestFormSubmitBtn,
        e.target.value,
        requestFormPhoneInput,
        phonePattern,
        'Номер не корректный'
    );
});

const footerForm = document.querySelector('.footer__form');
const footerFormNameInput = footerForm.querySelector('.name');
const footerFormPhoneInput = footerForm.querySelector('.phone');
const footerFormSubmitBtn = footerForm.querySelector('.form__submit');

const footerFormSuccess = new Set();
footerFormSubmitBtn.disabled = true;

footerFormNameInput.addEventListener('input', (e) => {
    checker(
        footerFormSuccess,
        footerFormSubmitBtn,
        e.target.value,
        footerFormNameInput,
        namePattern,
        'Не корректное имя'
    );
});

footerFormPhoneInput.addEventListener('input', (e) => {
    checker(
        footerFormSuccess,
        footerFormSubmitBtn,
        e.target.value,
        footerFormPhoneInput,
        phonePattern,
        'Номер не корректный'
    );
});

const modalForm = document.querySelector('.modal__form');
const modalFormNameInput = modalForm.querySelector('.name');
const modalFormPhoneInput = modalForm.querySelector('.phone');
const modalFormSubmitBtn = modalForm.querySelector('.form__submit');

const modalFormSuccess = new Set();
modalFormSubmitBtn.disabled = true;

modalFormNameInput.addEventListener('input', (e) => {
    checker(
        modalFormSuccess,
        modalFormSubmitBtn,
        e.target.value,
        modalFormNameInput,
        namePattern,
        'Не корректное имя'
    );
});

modalFormPhoneInput.addEventListener('input', (e) => {
    checker(
        modalFormSuccess,
        modalFormSubmitBtn,
        e.target.value,
        modalFormPhoneInput,
        phonePattern,
        'Номер не корректный'
    );
});

function clearError(inputField) {
    const err = inputField.closest('.form__group').querySelector('.error');
    if (err) {
        err.remove();
    }
}

function showError(field, errorText) {
    const errorElement = document.createElement('small');
    errorElement.classList.add('error');
    errorElement.innerText = errorText;
    field.closest('.form__group').appendChild(errorElement);
}

function changeSubmitStatus(success, submitBtn) {
    if (success.size == 2) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

function checker(success, submitBtn, value, input, pattern, msg) {
    clearError(input);

    const isValid = pattern.test(value);

    if (isValid) {
        success.add(input);
    } else {
        success.delete(input);
        showError(input, msg);
    }

    changeSubmitStatus(success, submitBtn);
}
