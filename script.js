'use strict';

const nameCompany = document.querySelector('.name-company');
const categoryGoods = document.querySelector('.category-goods');
const nameGoods = document.querySelector('.name-goods');
const createPrice = document.querySelector('#create-price');
const textItem = document.querySelectorAll('.text-item');
const priceItem = document.querySelectorAll('.price-item');
const descriptionBox = document.querySelector('.description-box');
const author = document.querySelector('.author');
const date = document.querySelector('.date');

createPrice.addEventListener('input', event => {
    switch (event.target.name) {
        case 'nameCompany': nameCompany.textContent = event.target.value;
            break;
        case 'categoryGoods': categoryGoods.textContent = event.target.value;
            break;
        case 'nameGoods': nameGoods.textContent = event.target.value;
            break;
        case 'camera': textItem[0].textContent = event.target.value;
            break;
        case 'memory': textItem[1].textContent = event.target.value;
            break;
        case 'display': textItem[2].textContent = event.target.value;
            break;
        case 'battery': textItem[3].textContent = event.target.value;
            break;
        case 'priceOne': priceItem[0].textContent = event.target.value;
            break;
        case 'priceTwo': priceItem[1].textContent = event.target.value;
            break;
        case 'description': descriptionBox.textContent = event.target.value;
            break;
        case 'author': author.textContent = event.target.value;
            break;
        case 'date': date.textContent = event.target.value;
            break;


    }

})
