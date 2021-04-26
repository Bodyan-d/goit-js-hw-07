const categoriesRef = document.querySelector('#categories');
const allCategories = document.querySelectorAll('.item');


//1
const categoriesItem = (allCategoriesLength) => `В списке ${allCategoriesLength.length} категории`;

console.log(categoriesItem(allCategories));
//1

//2
console.log(typeof(allCategories));
allCategories.forEach(categorie => {
    const categorieName = categorie.firstElementChild;
    const categorieElemets = categorie.lastElementChild;

    const categorieNameText = categorieName.textContent;
    const categorieQuantity = categorieElemets.children.length;

    console.log(`Категория: ${categorieNameText} \nКоличество элементов: ${categorieQuantity}`);
});
//2