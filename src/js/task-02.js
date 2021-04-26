const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',

];

const ulRef = document.querySelector('#ingredients')

const ingredientsRefs = [];



ingredients.map(ingredient => {
    const element = document.createElement('li');
    element.textContent = ingredient;

    ingredientsRefs.push(element);
});



ulRef.append(...ingredientsRefs);