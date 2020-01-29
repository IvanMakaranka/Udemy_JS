"use strict";

let money, time;

// time = prompt('Введите дату в формате YYYY-MM-DD', '');

function askMonthBudget() {
	money = +prompt("Ваш бюджет на месяц?", '');

	while (isNaN(money) || money == "" || money == null) {
		showInvalidDataAlert();
		askMonthBudget();
	}
}

askMonthBudget();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
    savings: true,
    chooseExpenses: function () {
        let i = 0;
    
        do {
            let expenseItem = prompt("Введите обязательную статью расходов в этом месяце", ''),
                costs = prompt("Во сколько обойдется?", '');
    
            if (typeof (expenseItem) === "string" 
                        && typeof (expenseItem) != null 
                        && typeof (costs) != null 
                        && expenseItem != "" 
                        && costs != "" 
                        && expenseItem.length < 50) {

                this.expenses[expenseItem] = costs;
                i++;
            } else {
                showInvalidDataAlert();
            }
        } while (i < 2);
    }, 
    detectDayBudget: function() {
        this.moneyPerDay = (this.budget / 30).toFixed();
        alert("Дневной бюджет: " + this.moneyPerDay);
    },
    detectLevel: function () {
        let wealthLevel = "";
    
        if (this.moneyPerDay < 100) {
            wealthLevel = "Минимальный уровень достатка";
        } else if (this.moneyPerDay < 2000) {
            wealthLevel = "Средний уровень достатка";
        } else {
            wealthLevel = "Высокий уровень достатка";
        }
    
        console.log(wealthLevel);
    },
    checkSavings: function() {
        if (this.savings) {
            let save = +prompt("Какова сумма накоплений", ""),
                percent = +prompt("Под какой процент");
    
            this.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + this.monthIncome.toFixed());
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            this.optionalExpenses[i] = prompt("Статья необязательных расходов?", '');
        }
    },
    chooseIncome: function() {
        let incomeItems = prompt("Что принесёт дополнительный доход? (Перечислить через зарятую)", "");

        if (incomeItems == null || incomeItems == "" || typeof(incomeItems) != "string") {
            showInvalidDataAlert();
            this.chooseIncome();
        }
        
        this.income = incomeItems.split(", ");
        this.income.push(prompt("Что-то еще?", ""));
        this.income.sort();
        
        this.income.forEach(function(item, index){
            alert("Способы доп. заработка: " + (index + 1) + ": " + item);
        });
    },
    toString: function() {
        console.log("Наша программа включает в себя данные: ");
        for (let key in this) {
            console.log("Свойство: " + key + " значение: " + this[key]);
        }
    }
};

appData.chooseIncome();
appData.toString();

function showInvalidDataAlert() {
    alert("Данные введены некорректно, повторите ввод");
}