var initialPrice = document.querySelector('#initial-price');
var noOfStocks = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');

var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(noOfStocks.value);
    var cur = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, cur);
}

function calculateProfitAndLoss(initial,quantity,current) {
    if (initial > current) { 
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        showOutput(`Hey the loss is ${loss} and the percent is ${lossPercentage}%`);
    } else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        showOutput(`Hey the profit is ${profit} and the percent is ${profitPercentage}%`);
    } else {
        showOutput(`Why you do that? Now I'm broken!`);
    }   
}

function showOutput(message) {
    outputBox.innerHTML = message ;
}

submitBtn.addEventListener('click', submitHandler);
