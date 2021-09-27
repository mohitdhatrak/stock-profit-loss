var inputBuyPrice = document.querySelector("#input-buy-price");
var inputQuantity = document.querySelector("#input-quantity");
var inputCurrentPrice = document.querySelector("#input-current-price");
var button = document.querySelector("#button");
var outputText = document.querySelector("#output-message");
var errorText = document.querySelector("#error-message");

function clickListener() {
    outputText.innerText = "";
    errorText.innerText = "";

    var inputInitialPrice = Number(inputBuyPrice.value);
    var inputNoOfStocks = Number(inputQuantity.value);
    var inputFinalPrice = Number(inputCurrentPrice.value);

    var netCostPrice = inputInitialPrice * inputNoOfStocks;
    var profit =
        inputFinalPrice * inputNoOfStocks - inputInitialPrice * inputNoOfStocks;
    var loss =
        inputInitialPrice * inputNoOfStocks - inputFinalPrice * inputNoOfStocks;

    var profitPercent = (profit * 100) / netCostPrice;
    var lossPercent = (loss * 100) / netCostPrice;

    if (inputInitialPrice < 0 || inputNoOfStocks < 0 || inputFinalPrice < 0) {
        errorText.innerText = "Please enter positive numerical values only";
        outputText.innerText =
            "Fact: You cannot have negative money in stocks because even if the price of your stocks fluctuates or falls drastically, it cannot attain a value less than zero. ";
    } else if (
        inputBuyPrice.value === "" ||
        inputQuantity.value === "" ||
        inputCurrentPrice.value === ""
    ) {
        errorText.innerText =
            "Please fill all sections with positive numerical values";
    } else if (inputNoOfStocks === 0) {
        errorText.innerText =
            "Please fill non-zero positive numerical values only!";
        outputText.innerText =
            "Note: Number of stocks bought = 0, implies you bought no stocks, so no profit no loss";
    } else if (inputInitialPrice == inputFinalPrice) {
        outputText.innerText =
            "Your initial purchase price is same as current price, so no profit no loss";
    } else if (inputInitialPrice === 0) {
        errorText.innerText =
            "Please fill non-zero positive numerical values only!";
        outputText.innerText =
            "Note: Initial purchase price cannot be equal to zero.";
    } else if (inputFinalPrice === 0) {
        errorText.innerText =
            "Fact: A stock's value can go as low as zero if the company goes bankrupt. If there are no funds to pay off creditors, the stockholders receive zero compensation for their shares. So, their stock becomes worthless, and they lose their entire investment i.e. loss = invested amount & loss percent = 100%.";
        outputText.innerText =
            "The loss is " +
            loss +
            " and percentage loss is " +
            lossPercent.toFixed(2) +
            " %";
    } else if (inputInitialPrice > inputFinalPrice) {
        outputText.innerText =
            "Your loss is " +
            loss +
            " and percentage loss is " +
            lossPercent.toFixed(2) +
            " %";
    } else if (inputInitialPrice < inputFinalPrice) {
        outputText.innerText =
            "Your profit is " +
            profit +
            " and percentage profit is " +
            profitPercent.toFixed(2) +
            " %";
    }
}

button.addEventListener("click", clickListener);
