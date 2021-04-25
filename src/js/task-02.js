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

const createItem = () => {

    for (let i = 0; i < ingredients.length; i += 1) {
        const element = document.createElement('li');
        element.textContent = ingredients[i];

        ingredientsRefs.push(element);
    };
};
createItem();

ulRef.append(...ingredientsRefs);