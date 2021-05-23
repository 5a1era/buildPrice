'use strict';

const body = document.querySelector('body');
const nameCompany = document.querySelector('nameCompany');

body.addEventListener('click', event => {
    console.log(nameCompany.value);
})


