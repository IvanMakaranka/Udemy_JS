"use strict";

let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value")[0],
    daybudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
    yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0],

    expensesFields = document.getElementsByClassName("expenses-item"),
    confirmExpensesBtn = document.getElementsByTagName("button")[0],
    confirmOptionalExpensesBtn = document.getElementsByTagName("button")[1],
    calcBtn = document.getElementsByTagName("button")[2],
    optionalExpensesFields = document.querySelectorAll(".optionalexpenses-item"),
    possibleIncomeField = document.querySelector("#income"),
    savingsCheckBox = document.querySelector("#savings"),
    sumField = document.querySelector("#sum"),
    percentField = document.querySelector("#percent"),
    
    yearField = document.querySelector(".year-value"),
    monthField = document.querySelector(".month-value"),
    dayField = document.querySelector(".day-value");
  