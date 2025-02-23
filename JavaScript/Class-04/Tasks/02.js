// Discount Calculator

let price = parseInt(prompt("Enter the Original Price: "));
let discountPercentage = parseInt(prompt("Enter Discount Percentage: "));
function calculateDiscount(price, discountPercentage) {
  discount = (price * discountPercentage) / 100;
  discountedPrice = price - discount;

  alert(`Original Price: ${price}, Discounted Price: ${discountedPrice}`);
}

// calculateDiscount(1000, 30);
calculateDiscount(price, discountPercentage);
