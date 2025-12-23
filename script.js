const hamburger = document.getElementById("hamburger");

function showSlide(id) {
  document.querySelectorAll(".slide").forEach(s => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide("home");
});
