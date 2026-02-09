/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Check for valid sizes
  if (size !== "small" && size !== "medium" && size !== "large"){
    return -1;
  }

  // Check for valid coffee type
  if (type !== "regular" && type !== "latte" && type !== "cappuccino" && type !== "mocha"){
    return -1;
  }

  let totalPrice = 0;

  // Add price for the size
  switch (size) {
    case "small":
      totalPrice += 3;
      break;
    case "medium":
      totalPrice += 4;
      break;
    case "large":
      totalPrice += 5;
      break;
  }

  // Price for coffee type
  switch (type) {
    case "regular":
      totalPrice += 0;
      break;
    case "latte":
      totalPrice += 1;
      break;
    case "cappuccino":
      totalPrice += 1.5;
      break;
    case "mocha":
      totalPrice += 2;
      break;
  }

  // Price for Addons: Whipped Cream
  if (extras["whippedCream"]){
    totalPrice += 0.5;
  }
  // Price for Addons: Extra Shot
  if (extras["extraShot"]){
    totalPrice += 0.75;
  }

  return Math.round(totalPrice * 100) / 100;

}
