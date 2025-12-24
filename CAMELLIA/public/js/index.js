const filters = document.getElementById("filters");
document.getElementById("scrollLeft").addEventListener("click", () => {
  filters.scrollBy({ left: -200, top: 0, behavior: "smooth" });
});

document.getElementById("scrollRight").addEventListener("click", () => {
  filters.scrollBy({ left: 200, top: 0, behavior: "smooth" });
});
