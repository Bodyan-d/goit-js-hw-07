const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onOutput);

function onOutput(event) {
    if (event.currentTarget.value === '') {
        outputRef.textContent = 'незнакомец';
        return
    }
    outputRef.textContent = event.currentTarget.value;
};