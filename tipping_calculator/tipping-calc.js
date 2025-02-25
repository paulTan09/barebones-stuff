let billAmountInput = parseInt(prompt("Please insert the bill amount."));
let tipPercentageInput = parseInt(prompt("Please insert the tip you'd like to offer (in %)"));
let calculatedPercentage = (tipPercentageInput / 100) * billAmountInput;
let totalPaid;

let main = document.querySelector("main");

if (isNaN(billAmountInput) || isNaN(tipPercentageInput)) {
  alert("The bill amount and/or the tip % isn't a number. Try again");
}
else {
  totalPaid = billAmountInput + calculatedPercentage;
  main.innerHTML += `
  <p>The amount you'll pay: <strong>${totalPaid}</strong></p>
  <br>
  <p>How it's calculated: </p>
  <li> Base amount: ${billAmountInput} </li>
  <li> Tip percentage (${tipPercentageInput}%) = ${calculatedPercentage} </li>
  <li> Base amount + tip percentage = ${totalPaid} </li>
  `;

}

// TEST PUSH