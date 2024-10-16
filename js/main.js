// переменные первого, второго числа, знака и финиш(для =)
let x = '';
let y = '';
let sign = '';
let finish = false;

// массивы с числами и знаками

const digit = ['1', '2', '3','4', '5', '6', '7', '8', '9','0', '.'];
const signs = ['+', '-', '*', '/', '%'];

// переменные с кнопками и дисплеем
const buttons = document.querySelector('.buttons'); // множество кнопок
const button = document.querySelector('.button'); // кнопка
const button1 = document.querySelector('.button1'); // очистка(ac)
const button2 = document.querySelector('.button2');
const display = document.querySelector('.display');

// функция очистки(ac) и смены знака(+/-)

button1.addEventListener('click', () => {
    x = '';
    y = '';
    sign = '';
    finish = false;
    display.textContent = 0;
})

button2.addEventListener('click', () => {
    if (x !== '' && sign !== '') {
        if(sign === '+') {
            sign = '-';
            display.textContent = sign;
        } else {
            sign = '+';
            display.textContent = sign;
        }
    }
})

// отслеживание нажатий на кнопки и условия к ним
buttons.addEventListener('click', (e) => {
    if (!e.target.classList.contains('button')) return;

    // отслеживает нажатую кнопки
    const key = e.target.textContent;

    // условия
    if (digit.includes(key)) {
        try {
            if (y === '' && sign === '') { 
                if (x === '' && key === '.') { 
                    x = '0.'; 
                    display.textContent = x; 
                } else if (x.includes('.') && key === '.') {
                    x += '';
                } else if(x === '' && key === '0') {
                    x += '';
                } else {
                    x += key;
                    display.textContent = x;
                }
            } else if (x !== '' && y !== '' && finish) {
                y = key;
                finish = false;
                display.textContent = y;
            } else {
                if (key === '.' && y.includes('.')) {
                    y += '';
                    display.textContent = y;
                } else if(y === '0' && key !== '.') {
                    y = key
                    display.textContent = y;
                } else {
                    y += key;
                    display.textContent = y;
                }
            }
    } catch(error) {
        display.textContent('Ошибка')
    }
    console.log(x, sign, y)
    return;
}

// отслеживание знака
    if (x !== '') {
        if (signs.includes(key)) {
            sign = key;
            console.log(x, sign, y);
            display.textContent = sign;
            return;
        } 
    } else if(x == '' && signs.includes(key)){
        x = '0'
        sign = key;
    } 
    // = и операции
    if (key === '=' && x !== '' && y !== '') {
        switch (sign) {
            case '+':
                x = (+x) + (+y);
                break;
            case '-':
                x = x - y;
                break;
            case '*':
                x = x * y;
                break;
            case '/':
                x = x / y;
                break;
            case '%':
                x = (y / 100) * x;
                break;
        } 
        finish = true;
        display.textContent = x;
        console.log(x, sign, y);
        
    } 
});

// тема
let themeButton = document.querySelector('.theme');
let calculator = document.querySelector('.calculator');
let body = document.querySelector('body');
let theme = 'black';


themeButton.addEventListener('click', () => {
    if (theme === 'black') {
        theme = 'white';
        calculator.style.background = 'whitesmoke';
        display.style.color = 'rgb(54, 54, 54)';
        themeButton.style.background = 'black';
        themeButton.style.color = 'white';
        themeButton.textContent = 'Тёмная тема';
    } else {
        theme = 'black';
        calculator.style.background = 'black';
        display.style.color = 'white'
        themeButton.style.background = 'white';
        themeButton.style.color = 'black';
        themeButton.textContent = 'Светлая тема';
    }
})
