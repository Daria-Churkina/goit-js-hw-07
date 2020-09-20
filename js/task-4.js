//Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

//Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const subBtnRef = document.querySelector("[data-action='increment']");
const addBtnRef = document.querySelector("[data-action='decrement']");
const spanRef = document.querySelector("#value");
const divRef = document.querySelector("#counter ");

let counterValue = 0;
const increment = () => {
  spanRef.textContent = counterValue += 1;
};

const decrement = () => {
  spanRef.textContent = counterValue -= 1;
};
subBtnRef.addEventListener("click", increment);
addBtnRef.addEventListener("click", decrement);
