const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ulingredients = document.getElementById('ingredients');
const foodIngredients = ingredients.forEach(ingredient => {
  let items = document.createElement('li');
  items.innerHTML = ingredient;
  ulingredients.append(items);
});

// console.log(foodIngredients); ???
