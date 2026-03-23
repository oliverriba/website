document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("notebook-modal");
  const iframe = document.getElementById("notebook-frame");
  const buttons = document.querySelectorAll(".open-notebook");
  const close = document.querySelector(".close-modal");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      iframe.src = btn.dataset.src;
      modal.style.display = "block";
    });
  });

  close.addEventListener("click", () => {
    modal.style.display = "none";
    iframe.src = "";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      iframe.src = "";
    }
  });
});
