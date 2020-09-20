//Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//подставляет его текущее значение в span#name - output.
//Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputRef = document.getElementById("name-input");
const spanRef = document.getElementById("name-output");
inputRef.addEventListener("input", InputChange);
function InputChange(event) {
  if (event.currentTarget.value === "") {
    return (spanRef.textContent = "незнакомец");
  } else {
    spanRef.textContent = event.currentTarget.value;
  }
}
