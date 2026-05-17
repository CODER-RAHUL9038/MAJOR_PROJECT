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
    let taxInfo = document.getElementsByClassName("tax-info");
    let priceValues = document.getElementsByClassName("price-value");

    for (let i = 0; i < priceValues.length; i++) {
      let basePrice = parseFloat(priceValues[i].getAttribute("data-base-price"));
      
      if (taxSwitch.checked) {
        // Show price with 18% GST
        let totalPrice = basePrice * 1.18;
        priceValues[i].innerText = Math.round(totalPrice).toLocaleString("en-IN");
        if (taxInfo[i]) taxInfo[i].style.display = "inline";
      } else {
        // Restore base price
        priceValues[i].innerText = basePrice.toLocaleString("en-IN");
        if (taxInfo[i]) taxInfo[i].style.display = "none";
      }
    }
  });
}
