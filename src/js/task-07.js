const controlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text')


controlRef.addEventListener('input', currentValue);


function currentValue(event) {
    textRef.style.fontSize = `${event.currentTarget.value}px`;

};