
/* common function that will work when i will call ..start */

function inputFieldById(id) {
  let anyValue = document.getElementById(id).value;
  let anyValueNumber = parseFloat(anyValue);
  return anyValueNumber;
}

function outFieldById(id) {
  let anyValue = document.getElementById(id).innerText;
  let anyValueNumber = parseFloat(anyValue);
  return anyValueNumber;
}
/* common function that will work when i will call...end */


/*cash in button start*/ 
document.getElementById("add-money-button")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const pinNumber = inputFieldById("input-pin-number");

    if (pinNumber === 1234) {
      let total = outFieldById("main-balance") + inputFieldById("amount-input-number");
      document.getElementById("main-balance").innerText = total;
    }
    else {
        alert('invalid pin number')     
    }
      
});

/*cash out button start*/ 
document.getElementById("cash-out-button")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const pinNumber = inputFieldById("cash-input-pin-number");

    if (pinNumber === 1234) {
      let total =
        outFieldById("main-balance") -
        inputFieldById("cash-input-amount-number");
      document.getElementById("main-balance").innerText = total;
    }
    else {
        alert('Invalid pin number')     
    }
      
});


/* transfer div design start */
let p = document.createElement('p');
let text = document.createTextNode('add money');
p.appendChild(text);
document.getElementById("transfer-history-div").appendChild(p);




/* button click and then show the target element */

document.getElementById("add-money-function-btn").addEventListener('click', function () {
    document.getElementById("add-money-div").classList.remove("hidden");
    document.getElementById("cash-out-div").classList.add("hidden");
    document.getElementById("transfer-history-div").classList.add("hidden");
});


document.getElementById("cash-out-function-btn").addEventListener("click", function () {
    document.getElementById("add-money-div").classList.add("hidden");
    document.getElementById("transfer-history-div").classList.add("hidden");
    document.getElementById("cash-out-div").classList.remove("hidden");
});

document.getElementById("transfer-history-btn")
  .addEventListener("click", function () {
    document.getElementById("add-money-div").classList.add("hidden");
    document.getElementById("transfer-history-div").classList.remove("hidden");
    document.getElementById("cash-out-div").classList.add("hidden");
  });



