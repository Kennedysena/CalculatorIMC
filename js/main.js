import { Modal } from "./modal.js";
import { alertError } from "./alert.js";
import { notNumber } from "./utils.js";
import { calculateIMC } from "./utils.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.onsubmit = function (event) {
  event.preventDefault();

  const weight = Number(inputWeight.value);
  const height = Number(inputHeight.value);

  const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height);

  if (weightOrHeightIsNotANumber) {
    alertError.open();

    setTimeout(() => {
      alertError.close();
    }, 3000);
    form.reset();
    return;
  }

  const result = calculateIMC(weight, height);
  displayResultMessage(result);
};

function displayResultMessage(result) {
  const message = `Seu IMC é ${result}`;
  let subMessage = ``;

  if (result < 18.5) {
    subMessage = "Esta abaixo do peso";
  } else if (result >= 18.5 && result < 24.9) {
    subMessage = "Peso normal";
  } else if (result >= 24.9 && result < 29.9) {
    subMessage = "Sobrepeso";
  } else {
    subMessage = "Obesidade";
  }

  Modal.message.innerText = message;
  Modal.subMessage.textContent = subMessage;
  Modal.open();
  form.reset();
}
