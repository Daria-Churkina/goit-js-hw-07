//Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

//Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
//Для добавления стилей, используй CSS-классы valid и invalid.

const validationInputRef = document.querySelector("#validation-input");
const validLength = Number(validationInputRef.getAttribute("data-length"));

validationInputRef.addEventListener("blur", inputValidation);

function inputValidation() {
  validationInputRef.classList.add("invalid");

  if (validationInputRef.value.length === validLength) {
    validationInputRef.classList.remove("invalid");
    validationInputRef.classList.add("valid");
  }

  if (validationInputRef.value === "") {
    validationInputRef.classList.remove("valid", "invalid");
  }
}
