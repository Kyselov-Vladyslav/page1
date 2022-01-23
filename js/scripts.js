'use strict';

const btn = document.querySelector('header a');
const h1 = document.querySelector('header h1');
let coutner = 0;
btn.addEventListener('click', () => {
    coutner++;
    // alert('test')
console.log(coutner);
if (coutner % 2 === 0){
    h1.innerHTML = 'Tuning samochodów Warszawa';
} else{
    h1.innerHTML = 'Pan zadowolony :)';
}
});