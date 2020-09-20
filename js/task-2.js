//В HTML есть пустой список ul#ingredients.

//< ul id = "ingredients" ></ >
//   В JS есть массив строк.

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
//Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//после чего вставит все li за одну операцию в список ul.ingredients.
//Для создания DOM - узлов используй document.createElement().

const ulRef = document.querySelector("#ingredients");
console.log(ulRef);

const itemsRef = ingredients.map((el) => {
  const liRef = document.createElement("li");
  liRef.textContent = el;
  return liRef;
});

ulRef.append(...itemsRef);
