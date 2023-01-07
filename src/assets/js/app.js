const modalBtn = document.querySelectorAll("[data-modal]");
const body = document.body;
const modalClose = document.querySelectorAll(".modal__close");
const modal = document.querySelectorAll(".modal");

modalBtn.forEach((item) => {
  item.addEventListener("click", (event) => {
    let $this = event.currentTarget;
    let modalId = $this.getAttribute("data-modal");
    let modal = document.getElementById(modalId);
    let modalContent = modal.querySelector(".modal__content");

    modalContent.addEventListener("click", (event) => {
      event.stopPropagation();
    });

    modal.classList.add("show");
    body.classList.add("no-scroll");

    setTimeout(() => {
      modalContent.style.transform = "none";
      modalContent.style.opacity = "1";
    }, 1);
  });
});

modalClose.forEach((item) => {
  item.addEventListener("click", (event) => {
    let currentModal = event.currentTarget.closest(".modal");

    closeModal(currentModal);
  });
});

modal.forEach((item) => {
  item.addEventListener("click", (event) => {
    let currentModal = event.currentTarget;

    closeModal(currentModal);
  });
});

function closeModal(currentModal) {
  let modalContent = currentModal.querySelector(".modal__content");
  modalContent.removeAttribute("style");

  setTimeout(() => {
    currentModal.classList.remove("show");
    body.classList.remove("no-scroll");
  }, 200);
}
