"use strict";

let money, time;

// time = prompt('Введите дату в формате YYYY-MM-DD', '');

askMonthBudget();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};

chooseExpenses(appData);
detectDayBudget(appData);
detectLevel(appData.moneyPerDay);
checkSavings(appData);
chooseOptExpenses(appData);

function askMonthBudget() {
	money = +prompt("Ваш бюджет на месяц?", '');

	while (isNaN(money) || money == "" || money == null) {
		alert("Данные введены некорректно, повторите ввод");
		askMonthBudget();
	}
}

function chooseExpenses(appData) {
	let i = 0;

	do {
		let expenseItem = prompt("Введите обязательную статью расходов в этом месяце", ''),
			costs = prompt("Во сколько обойдется?", '');

		if (typeof (expenseItem) === "string" &&
			typeof (expenseItem) != null &&
			typeof (costs) != null &&
			expenseItem != "" &&
			costs != "" &&
			expenseItem.length < 50) {

			appData.expenses[expenseItem] = costs;
			i++;
		} else {
			alert("Данные введены некорректно, повторите ввод");
		}
	} while (i < 2);
}

function detectDayBudget(appData) {
	appData.moneyPerDay = (appData.budget / 30).toFixed();
	alert("Дневной бюджет: " + appData.moneyPerDay);
}

function detectLevel(moneyPerDay) {
	let wealthLevel = "";

	if (moneyPerDay < 100) {
		wealthLevel = "Минимальный уровень достатка";
	} else if (moneyPerDay < 2000) {
		wealthLevel = "Средний уровень достатка";
	} else {
		wealthLevel = "Высокий уровень достатка";
	}

	console.log(wealthLevel);
}

function checkSavings(appData) {
	if (appData.savings) {
		let save = +prompt("Какова сумма накоплений", ""),
			percent = +prompt("Под какой процент");

		appData.monthIncome = save / 100 / 12 * percent;
		alert("Доход в месяц с вашего депозита: " + appData.monthIncome.toFixed());
	}
}

function chooseOptExpenses(appData) {
	for (let i = 0; i < 3; i++) {
		appData.optionalExpenses[i] = prompt("Статья необязательных расходов?", '');
	}
}
