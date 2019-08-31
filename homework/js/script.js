let menu = document.querySelector('.menu'),
    menuItem = document.getElementsByClassName('menu-item'),
    title = document.getElementById('title'),
    column = document.getElementsByClassName('column'),
    adv = document.querySelector('.adv'),
    prom = document.getElementById('prompt');

let li = document.createElement('li');
li.classList.add('menu-item');
li.textContent = "Пятый пункт";
menu.appendChild(li);

menu.insertBefore(menuItem[2], menuItem[1]);

//поменяли фон body
document.body.style.background = "url(img/apple_true.jpg) center no-repeat";
// поменяем заголовок
title.textContent = 'Мы продаем только подлинную технику Apple';
// удаляем рекламу
column[1].removeChild(adv);

let text;

while(text == null || text == ''){
  text = prompt("Как вы относитесь к технике Apple ?", "");
  prom.innerHTML = '<h1>'+text+'</h1>';
}
