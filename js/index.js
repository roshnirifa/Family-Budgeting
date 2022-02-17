
document.getElementById('calculate-btn').addEventListener('click', function () {
    const foodInput = document.getElementById('food-input');
    const foodInputText = parseFloat(foodInput.value);


    // rent
    const rentInput = document.getElementById('rent-input');
    const rentInputText = parseFloat(rentInput.value);

    // clothes
    const clothesInput = document.getElementById('clothes-input');
    const clothesInputText = parseFloat(clothesInput.value);
    // calculate
    const calculate = foodInputText + rentInputText + clothesInputText;
    // total expenses
    const expenses = document.getElementById('total-expenses');
    const expensesText = expenses.innerText;
    expenses.innerText = calculate;
    //balance
    const income = document.getElementById('income-input');
    let incomeText = parseFloat(income.value);
    const balance = document.getElementById('balance');
    let balanceText = parseFloat(balance.innerText);
    balance.innerText = incomeText - expenses.innerText
    if (typeof foodInputText != 'number' || typeof rentInputText != 'number' || typeof clothesInputText != 'number') {
        return 'enter a number';
    }
    if (foodInputText < 0 || rentInputText < 0 || typeof clothesInputText < 0) {
        return 'enter a positive number'
    }
    //  savings
    document.getElementById('save-btn').addEventListener('click', function () {
        const savingInput = document.getElementById('savings-input ');
        const savingInputText = parseFloat(savingInput.value);
        // saving amount

        const savingAmount = document.getElementById('saving-amount');
        const savingAmountText = parseFloat(savingAmount.innerText);
        let totalSavingAmount = (income.value * savingInputText) / 100;
        savingAmount.innerText = balance.innerText - (balance.innerText - totalSavingAmount);
        // remaning balance 
        const remaningInput = document.getElementById('remaining-input');
        const remaningInputText = remaningInput.innerText;
        remaningInput.innerText = balance.innerText - savingAmount.innerText;



    })




})



