'use strict'

function listen(event){
  event.target.parentElement.style.backgroundColor = event.target.dataset.attribute;
}

for(const button of document.querySelectorAll('button')){
  button.addEventListener('click', listen)
}