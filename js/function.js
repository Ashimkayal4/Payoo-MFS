function getInputFieldById() {
    const inputNumber = document.getElementById('amount-input-number').value;
    const mainBalance = document.getElementById('main-balance').innerText;
    const mainBalanceNumber = parseFloat(mainBalance);
    const inputFloatNumber = parseFloat(inputNumber);
    const newMainBalance = mainBalanceNumber + inputFloatNumber;
    const finalReturn = document.getElementById('main-balance').innerText = newMainBalance;
    return finalReturn;
}

function getInputFieldById2() {
    const inputNumber = document.getElementById('amount-input-number').value;
    const mainBalance = document.getElementById('main-balance').innerText;
    const mainBalanceNumber = parseFloat(mainBalance);
    const inputFloatNumber = parseFloat(inputNumber);
    const newMainBalance = mainBalanceNumber - inputFloatNumber;
    const finalReturn = document.getElementById('main-balance').innerText = newMainBalance;
    return finalReturn;
}

document.getElementById('cash-out-button').addEventListener('click', function (event) {
    event.preventDefault();
    const pinNumber = document.getElementById('input-pin-number').value;
    if (pinNumber === '1234') {
        getInputFieldById2();
    }
    else {
        alert('Invalid pin or number')
    }
})

document.getElementById('add-money-button').addEventListener('click', function (event) {
    event.preventDefault();
    const pinNumber = document.getElementById('input-pin-number').value;
    if (pinNumber === '1234') {
        getInputFieldById();
    }
    else {
        alert('Invalid pin or number')
    }
})


document.getElementById('cash-out-function-btn').addEventListener('click', function () {
    document.getElementById('cash-out-div').classList.remove('hidden');
    document.getElementById('add-money-div').classList.add('hidden')
})


document.getElementById('add-money-function-btn').addEventListener('click', function () {
    document.getElementById('cash-out-div').classList.add('hidden');
    document.getElementById('add-money-div').classList.remove('hidden')
})