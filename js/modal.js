export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  subMessage: document.querySelector(".modal .title p"),
  buttonClose: document.querySelector(".modal button.close"),

  open: function () {
    Modal.wrapper.classList.add("open");
  },
  close: function () {
    Modal.wrapper.classList.remove("open");
  },
};

Modal.buttonClose.onclick = function () {
  Modal.close();
};

window.addEventListener("keydown", handleKeydown);
function handleKeydown(event) {
  if (event.key == "Escape") {
    Modal.close();
  }
}
