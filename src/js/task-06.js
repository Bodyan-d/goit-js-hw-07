const inputRef = document.querySelector('#validation-input');

const validLength = inputRef.dataset.length;

inputRef.addEventListener('input', addOrrRemoveClass);

function addOrrRemoveClass(event) {

    if (event.currentTarget.value.length > validLength) {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid')
        return;
    };

    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');

};