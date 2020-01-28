"use strict";

let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

for (let i = 0; i < 2; i++) {
	let expenseItem = prompt("Введите обязательную статью расходов в этом месяце", ''),
		costs = prompt("Во сколько обойдется?", '');

	if (typeof(expenseItem) === "string" 
			&& typeof(expenseItem) != null
			&& typeof(costs) != null
			&& expenseItem != "" 
			&& costs != "" 
			&& expenseItem.length < 50) {
		
console.log("if: " + i);
		appData.expenses[expenseItem] = costs;
	} else {
		alert("Данные введены некорректно, повторите ввод");
		i--;
	}
}

//Cycle while
/*
let i = 0;
while (i < 2) {
	let expenseItem = prompt("Введите обязательную статью расходов в этом месяце", ''),
		costs = prompt("Во сколько обойдется?", '');

	if (typeof(expenseItem) === "string" 
			&& typeof(expenseItem) != null
			&& typeof(costs) != null
			&& expenseItem != "" 
			&& costs != "" 
			&& expenseItem.length < 50) {
		
		appData.expenses[expenseItem] = costs;
		i++;
	} else {
		alert("Данные введены некорректно, повторите ввод");
	}
}
*/

//Cycle do..while
/*
i = 0;
do {
	let expenseItem = prompt("Введите обязательную статью расходов в этом месяце", ''),
		costs = prompt("Во сколько обойдется?", '');

	if (typeof(expenseItem) === "string" 
			&& typeof(expenseItem) != null
			&& typeof(costs) != null
			&& expenseItem != "" 
			&& costs != "" 
			&& expenseItem.length < 50) {
		
		appData.expenses[expenseItem] = costs;
		i++;
	} else {
		alert("Данные введены некорректно, повторите ввод");
	}
}
while(i < 2);
*/

appData.moneyPerDay = appData.budget / 30;

alert("Дневной бюджет: " + appData.moneyPerDay);

let wealthLevel = "";

if (appData.moneyPerDay < 100) {
	wealthLevel = "Минимальный уровень достатка";
} else if (appData.moneyPerDay < 2000) {
	wealthLevel = "Средний уровень достатка";
} else {
	wealthLevel = "Высокий уровень достатка";
}

console.log(wealthLevel);