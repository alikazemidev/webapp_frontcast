let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let submit = document.querySelector("a.modal__action");
let negative = document.querySelector("a.modal__action--negative");
let selectPlanBtn = document.querySelectorAll(".plan button");

for (let i = 0; i < selectPlanBtn.length; i++) {
  selectPlanBtn[i].addEventListener("click", () => {
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}
submit.addEventListener("click", close);

negative.addEventListener("click", close);

function close() {
  modal.classList.remove("open");
  backdrop.classList.remove("open");
}
