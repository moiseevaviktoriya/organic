'use strict';

window.addEventListener('scroll', scroll);

let numbers = document.querySelectorAll('.progress__item-count'),
numbersArr = Array.from(numbers);

function scroll() {
  let scrTop = window.scrollY;
    
    numbersArr.forEach(function (number) {
        if (numbersArr[0].offsetTop - scrTop < window.innerHeight) {
            numAnimate(number);
        } 
    });
}

function numAnimate(number) {
    let num = 1;
    let result = +number.childNodes[0].textContent;
    
    setInterval(function () {
        num++;
        if (num <= result) { 
            number.childNodes[0].textContent = num; 
        }
    }, (100 - (result / 10)) / 4);
    
    window.removeEventListener('scroll', scroll);
};