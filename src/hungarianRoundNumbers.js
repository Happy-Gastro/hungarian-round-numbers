/**
 * Performs Hungarian (HUF) rounding on a given price. Hungarian rounding rules are as follows:
 * - If the last digit (after dividing the price by 10) is 0 or 5, the number remains unchanged.
 * - If the last digit is 3, 4, 6, or 7, it rounds to 5.
 * - If the last digit is 8 or 9, it rounds up to the next ten (0 of the next number).
 * - If the last digit is 1 or 2, it rounds down to 0.
 * This function is designed to work with integer values and returns the rounded number
 * according to these specific rules.
 *
 * @param {number} price - The price to be rounded. Defaults to 0 if not provided.
 * @returns {number} The rounded price according to Hungarian rounding rules.
 */
const hungarianRoundNumbers = (price = 0) => {
    // Convert the price to a string with one decimal place, then split it into two parts.
    const priceTags = (price / 10).toFixed(1).toString().split('.');
    let firstTag = parseInt(priceTags[0], 10); // The integer part of the price divided by 10.
    let lastTag = parseInt(priceTags[1], 10); // The decimal part, representing the last digit for rounding.

    // Directly return the original price if the last digit is already 0 or 5.
    if (lastTag === 5 || lastTag === 0) {
        return price;
    } else {
        // Apply rounding rules based on the value of the last digit.
        if ([3, 4, 6, 7].includes(lastTag)) {
            lastTag = 5;
        } else if ([8, 9].includes(lastTag)) {
            lastTag = 0;
            firstTag += 1; // Increment the first part to round up to the next ten.
        } else {
            lastTag = 0; // For digits 1 and 2, round down to 0.
        }
        // Combine the parts and convert back to an integer.
        return parseInt(`${firstTag}${lastTag}`, 10) * 10;
    }
};

module.exports = hungarianRoundNumbers;