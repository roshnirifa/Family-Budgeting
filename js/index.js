// get value from input Field

function getInputValue(inputId) {
    let inputField = document.getElementById(inputId);
    let inputAmount = parseFloat(inputField.value);
    if (isNaN(inputAmount)) {
        return alert('please input a number')
    }
    else if (inputAmount < 0) {
        return alert('please enter a positive number');
    }
    return inputAmount;

}



document.getElementById('calculate-btn').addEventListener('click', function () {
    // food
    let foodInputValue = getInputValue('food-input')
    // rent
    let rentInputValue = getInputValue('rent-input')
    // clothes
    let clothesInputValue = getInputValue('clothes-input')
    // calculate
    const calculate = foodInputValue + rentInputValue + clothesInputValue;
    // total expenses
    const expenses = document.getElementById('total-expenses');
    const expensesText = expenses.innerText;
    expenses.innerText = calculate;
    // income
    let incomeInputValue = getInputValue('income-input')
    // balance
    const balance = document.getElementById('balance');
    let balanceText = parseFloat(balance.innerText);
    balance.innerText = incomeInputValue - expenses.innerText

    // error handeling for (expenses besi)
    if (expenses.innerText > incomeInputValue) {
        return alert('your expenses is amount is more than your total income')
    }





    //  savings
    document.getElementById('save-btn').addEventListener('click', function () {
        const savingInput = document.getElementById('savings-input ');
        const savingInputText = parseFloat(savingInput.value);


        // error handling
        if (isNaN(savingInputText) || savingInputText <= 0) {
            return alert('please input a number')
        }

        // saving amount

        const savingAmount = document.getElementById('saving-amount');
        const savingAmountText = parseFloat(savingAmount.innerText);




        let totalSavingAmount = (incomeInputValue * savingInputText) / 100;
        savingAmount.innerText = balance.innerText - (balance.innerText - totalSavingAmount);
        // error for saving amount
        if (savingAmount.innerText > balance.innerText) {
            return alert('your saving amount is more than balance amount')
        }
        // remaning balance 
        const remaningInput = document.getElementById('remaining-input');
        const remaningInputText = remaningInput.innerText;
        remaningInput.innerText = balance.innerText - savingAmount.innerText;



    })




})



