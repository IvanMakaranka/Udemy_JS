"use strict";

//находим элемент "обёртку" меню и пункты меню
let menuWrapper = document.getElementsByClassName("menu")[0];
let menuItems = document.getElementsByClassName("menu-item");

//меняем местами 2 и 3 пункты
menuWrapper.insertBefore(menuItems[2], menuItems[1]);

//Создаём 5ый элемент меню
let menuItem5 = document.createElement("li");
menuItem5.classList.add("menu-item");
menuItem5.textContent = "Пятый пункт";
//Добавляем 5ый элемент меню
menuWrapper.appendChild(menuItem5);

//Меняем фоновую картинку
document.body.style.backgroundImage = "url(img/apple_true.jpg)";

//Меняем title
document.getElementById("title").textContent = "Мы продаем только подлинную технику Apple";

//удаление рекламы
let adv = document.getElementsByClassName("adv");
adv[0].remove();

//Записываем ответ на вопрос "Как вы относитесь к технике Apple?"
document.getElementById("prompt").textContent = prompt("Как вы относитесь к технике Apple?", "");