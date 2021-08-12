'use strict'

// const [button1, button2, button3, button4] = document.querySelectorAll('button');
// const [div1] = document.querySelectorAll('div')

function listen(){
  this.parentElement.style.background = this.dataset.attribute;
}

// button1.addEventListener('click', listen);
// button2.addEventListener('click', listen);
// button3.addEventListener('click', listen);
// button4.addEventListener('click', listen);


for(const button of document.querySelectorAll('button')){
  button.addEventListener('click', listen)
}