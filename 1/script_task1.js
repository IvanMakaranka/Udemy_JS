let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

let expenseItem1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	costs1 = prompt("Во сколько обойдется?", ''),
	expenseItem2 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	costs2 = prompt("Во сколько обойдется?", '');

appData.expenses.expenseItem1 = costs1;
appData.expenses.expenseItem2 = costs2;

alert(appData.budget / 30);