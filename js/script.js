const moonIcon = document.querySelector("#moon-icon");
const sunIcon = document.querySelector("#sun-icon");

moonIcon.addEventListener("click", () => {
  document.body.classList.add("dark");
});
sunIcon.addEventListener("click", () => {
  document.body.classList.remove("dark");
});
