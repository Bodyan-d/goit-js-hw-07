const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onOutput);

function onOutput(event) {
    if (event.currentTarget.value === '') {
        return outputRef.textContent = 'незнакомец';
    }

    outputRef.textContent = event.currentTarget.value;
};