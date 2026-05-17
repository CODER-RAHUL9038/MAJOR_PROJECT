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

// TAX TOGGLE LOGIC - DYNAMIC PRICING
const taxSwitch = document.getElementById("flexSwitchCheckDefault");
if (taxSwitch) {
  taxSwitch.addEventListener("change", () => {
    const cards = document.querySelectorAll(".listing-card");
    
    cards.forEach(card => {
      const priceElement = card.querySelector(".price-value");
      const taxInfo = card.querySelector(".tax-info");
      
      if (priceElement && taxInfo) {
        const basePrice = parseFloat(priceElement.getAttribute("data-base-price"));
        
        if (taxSwitch.checked) {
          // Show price with 18% GST
          const totalPrice = basePrice * 1.18;
          priceElement.innerText = Math.round(totalPrice).toLocaleString("en-IN");
          taxInfo.style.display = "inline";
        } else {
          // Restore base price
          priceElement.innerText = basePrice.toLocaleString("en-IN");
          taxInfo.style.display = "none";
        }
      }
    });
  });
}
