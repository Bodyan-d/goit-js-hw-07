const valueRef = document.querySelector('#value');
const decrementBtn = valueRef.previousElementSibling;
const incrementBtn = valueRef.nextElementSibling;
let currentValue = 0;

const decrement = () => {
    currentValue -= 1;
    valueRef.textContent = currentValue
};
const increment = () => {
    currentValue += 1;
    valueRef.textContent = currentValue
};

decrementBtn.addEventListener('click', decrement);

incrementBtn.addEventListener('click', increment);