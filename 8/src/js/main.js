"use strict";

let appData = {
    budget: 0,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: "",
    savings: false
};

let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value")[0],
    dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
    yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0],

    expensesFields = document.getElementsByClassName("expenses-item"),
    confirmExpensesBtn = document.getElementsByTagName("button")[0],
    confirmOptionalExpensesBtn = document.getElementsByTagName("button")[1],
    calcDayBudgetBtn = document.getElementsByTagName("button")[2],
    optionalExpensesFields = document.querySelectorAll(".optionalexpenses-item"),
    possibleIncomeField = document.querySelector("#income"),
    savingsCheckBox = document.querySelector("#savings"),
    sumField = document.querySelector("#sum"),
    percentField = document.querySelector("#percent"),

    yearField = document.querySelector(".year-value"),
    monthField = document.querySelector(".month-value"),
    dayField = document.querySelector(".day-value");

disableButtons(true);

startBtn.addEventListener("click", function () {
    let time = prompt('Введите дату в формате YYYY-MM-DD', ''),
        money = +prompt("Ваш бюджет на месяц?", '');

    while (isNaN(money) || money == "" || money == null) {
        showInvalidDataAlert();
        time = prompt('Введите дату в формате YYYY-MM-DD', '');
        money = +prompt("Ваш бюджет на месяц?", '');
    }

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();

    let budgetDate = new Date(Date.parse(time));

    yearField.value = budgetDate.getFullYear();
    monthField.value = budgetDate.getMonth() + 1;
    dayField.value = budgetDate.getDate();

    disableButtons(false);
});

confirmExpensesBtn.addEventListener("click", function () {
    let i = 0,
        sum = 0;

    do {
        let expenseItem = expensesFields[i].value,
            costs = expensesFields[++i].value;

        if (typeof (expenseItem) === "string" &&
                typeof (expenseItem) != null &&
                typeof (costs) != null &&
                expenseItem != "" &&
                costs != "" &&
                expenseItem.length < 50) {

            appData.expenses[expenseItem] = costs;
            sum += +costs;
            i++;
        } else {
            showInvalidDataAlert();
        }
    } while (i < expensesFields.length);

    expensesValue.textContent = sum;
});

confirmOptionalExpensesBtn.addEventListener("click", function() {
    optionalExpensesValue.textContent = "";

    for (let i = 0; i < optionalExpensesFields.length; i++) {
        appData.optionalExpenses[i] = optionalExpensesFields[i].value;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
    }
});

calcDayBudgetBtn.addEventListener("click", function() {
    if (appData.budget == undefined) {
        dayBudgetValue.textContent = "Произошла ошибка";
        return;
    }
    
    appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
    dayBudgetValue.textContent = +appData.moneyPerDay;

    let wealthLevel = "";

    if (appData.moneyPerDay < 100) {
        wealthLevel = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay < 2000) {
        wealthLevel = "Средний уровень достатка";
    } else {
        wealthLevel = "Высокий уровень достатка";
    }

    levelValue.textContent = wealthLevel;
});

possibleIncomeField.addEventListener("input", function() {
    appData.income = possibleIncomeField.value.split(",");
    incomeValue.textContent = appData.income;
});

savingsCheckBox.addEventListener("click", function() {
    appData.savings = savingsCheckBox.checked;
});

sumField.addEventListener("input", function() {
    if (appData.savings) {
        let sum = +sumField.value,
            percent = +percentField.value;
        
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentField.addEventListener("input", function() {
    if (appData.savings) {
        let sum = +sumField.value,
            percent = +percentField.value;
        
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

function showInvalidDataAlert() {
    alert("Данные введены некорректно, повторите ввод");
}

function disableButtons(isDisabled) {
    confirmExpensesBtn.disabled = isDisabled;
    confirmOptionalExpensesBtn.disabled = isDisabled;
    calcDayBudgetBtn.disabled = isDisabled;
}
