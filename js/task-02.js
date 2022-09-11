const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const itemList = ingredients.map((item) => {
    const newItem = document.createElement('li');
    newItem.textContent = item;
    newItem.classList.add('item');
    return newItem;
});

document.querySelector('#ingredients').append(...itemList);
