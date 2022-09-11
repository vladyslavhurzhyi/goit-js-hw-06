// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

const categoriesRef = document.querySelector('#categories');

// Посчитает и выведет в консоль количество категорий в ul#categories

console.log(`Number of categories:  ${categoriesRef.children.length}`);

const allListTitle = document.querySelectorAll('.item');

allListTitle.forEach((item) => {
    console.log(
        `Category: ${item.firstElementChild.textContent}\nElements: ${
            item.querySelectorAll('li').length
        }`
    );
});
