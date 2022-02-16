


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

    // balance
    const income = document.getElementById('income-input');
    const incomeText = parseFloat(income.value);
    const balance = document.getElementById('balance');
    const balanceText = parseFloat(balance.innerText);
    balance.innerText = incomeText - expenses.innerText

})