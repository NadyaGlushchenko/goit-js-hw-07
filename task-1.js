// const sumСategoriesEl = document.querySelectorAll('.item');
// console.log(sumСategoriesEl);
// const titleEl = document.querySelectorAll('.title_js');

// console.log(titleEl[0].textContent);
// console.log(titleEl[1].textContent);
// console.log(titleEl[2].textContent);

const ul = Array.from(document.querySelector('#categories').children);
for (let elem of ul) {
  const category = elem.firstElementChild.textContent;
  const quantityElem = elem.lastElementChild.children.length;
  console.log(`Категория: ${category} \nКоличество элементов: ${quantityElem}`);
}
