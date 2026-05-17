const filters = document.getElementById("filters");
const scrollLeft = document.getElementById("scrollLeft");
const scrollRight = document.getElementById("scrollRight");

if (scrollLeft) {
  scrollLeft.addEventListener("click", () => {
    filters.scrollBy({ left: -200, top: 0, behavior: "smooth" });
  });
}

if (scrollRight) {
  scrollRight.addEventListener("click", () => {
    filters.scrollBy({ left: 200, top: 0, behavior: "smooth" });
  });
}

// TAX TOGGLE LOGIC
const taxSwitch = document.getElementById("flexSwitchCheckDefault");
if (taxSwitch) {
  taxSwitch.addEventListener("change", () => {
    let taxInfo = document.getElementsByClassName("tax-info");
    for (let info of taxInfo) {
      if (taxSwitch.checked) {
        info.style.display = "inline";
      } else {
        info.style.display = "none";
      }
    }
  });
}
