(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-follow-open]"),
    closeModalBtn: document.querySelector("[data-follow-close]"),
    modal: document.querySelector("[data-follow]")
  };
    // console.log(refs);
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();