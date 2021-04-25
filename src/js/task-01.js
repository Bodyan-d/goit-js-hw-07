const categoriesRef = document.querySelector('#categories');
const allCategories = categoriesRef.children;


//1
const categoriesItem = (allCategoriesLength) => `В списке ${allCategoriesLength.length} категории`;

console.log(categoriesItem(allCategories));
//1

//2
const nameAndGuantity = (allCategories) => {

    for (const nameCategorie of allCategories) {
        const categorieName = nameCategorie.firstElementChild;
        const categorieElemets = nameCategorie.lastElementChild;

        const categorieNameText = categorieName.textContent;
        const categorieQuantity = categorieElemets.children.length;

        console.log(`Категория: ${categorieNameText} \nКоличество элементов: ${categorieQuantity}`);

    };

};

nameAndGuantity(allCategories);
//2