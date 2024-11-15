const points = [
    "Це певно",
    "Без сумнівів",
    "Ви можете покластися на це",
    "Так, звісно",
    "Це точно так",
    "Як я бачу, так",
    "Найбільш ймовірно",
    "Так",
    "Перспективи хороші",
    "Знаки вказують на так",
    "Відповідь нечітка, спробуйте ще раз",
    "Краще не сказати зараз",
    "Запитайте пізніше",
    "Не можу передбачити зараз",
    "Сконцентруйтесь і спитайте знову",
    "Не покладайтеся на це",
    "Перспективи не дуже хороші",
    "Мої джерела кажуть ні",
    "Дуже сумнівно",
    "Моя відповідь — ні"
];

document.body.style.display = 'grid';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.height = '100vh';
document.body.style.backgroundColor = 'rgb(65, 0, 109)';

const ball = document.createElement('div');
ball.classList.add('ball');
document.body.appendChild(ball);

const response = document.createElement('p');
response.id = 'response';
response.innerHTML = 'S';
ball.appendChild(response);

const inputField = document.createElement('div');
inputField.classList.add('inputfield');
document.body.appendChild(inputField);

const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Спитай все, що тебе цікавить';
input.id = 'clear';
inputField.appendChild(input);

const button = document.createElement('button');
button.id = 'askme';
button.innerHTML = 'Enter';
button.onclick = myFunction;
inputField.appendChild(button);

function myFunction() {
    points.sort(() => Math.random() - 0.5);
    response.innerHTML = points[0];
    response.style.fontSize = '18px';

    setTimeout(timeup, 4000);
}

function timeup() {
    response.innerHTML = "S";
    response.style.fontSize = '120px';
    input.value = '';
}

