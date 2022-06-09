document.addEventListener("DOMContentLoaded", function() {
  const closeBtnEl = document.getElementById("btn-close");
  const modalEl = document.getElementById("mobile-nav");
  const modalOverlayEl = document.getElementById("modal-overlay");
  const burgerEl = document.getElementById("burger");



  closeBtnEl.addEventListener('click', function() {
    modalEl.classList.remove("open")
  });

  burgerEl.addEventListener('click', function() {
    modalEl.classList.add("open")
  });

  modalOverlayEl.addEventListener('click', function() {
    modalEl.classList.remove("open")
  });
});
