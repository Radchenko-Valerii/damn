'use strict'

const [div1, div2] = document.querySelectorAll('div');
const [img] = document.querySelectorAll('img');
const [buttonDown, buttonLeft, buttonRight, buttonUp, buttonReset, buttonText] = document.querySelectorAll('button')

function listen1(event){

  img.style.marginTop += event.target.dataset.attribute;
}

function listen2(event){
  
  img.style.marginRight += event.target.dataset.attribute;
}

function listen3(event){
  
  img.style.marginLeft += event.target.dataset.attribute;
}

function listen4(event){
  img.style.marginBottom += event.target.dataset.attribute;
}

function listen5(event){
  img.style.marginTop = event.target.dataset.attribute;
  img.style.marginRight = event.target.dataset.attribute;
  img.style.marginLeft = event.target.dataset.attribute;
  img.style.marginBottom = event.target.dataset.attribute;
}




  buttonDown.addEventListener('click', listen1);
  buttonRight.addEventListener('click', listen3);
  buttonLeft.addEventListener('click', listen2);  
  buttonUp.addEventListener('click', listen4);
  buttonReset.addEventListener('click', listen5);

const newButton = document.createElement('button');

newButton.textContent = 'Fake Button';

div2.append(newButton);

function listener(){
  if(newButton.textContent === ' '){
    newButton.textContent = 'Fake Button'
  } else {
    newButton.textContent = ' ';
  }
  
}

newButton.addEventListener('click', listener)

const [body] = document.querySelectorAll('body');

function listen (){
  const newParagraph = document.createElement('p')
  newParagraph.textContent = prompt();
  body.append(newParagraph);
}

buttonText.addEventListener('click', listen);

const newNewButton = document.createElement('button');

newNewButton.textContent = 'add new image';
div2.append(newNewButton);


function listenIMG (){
  const img1 = document.createElement('img');
  img1.src = document.images[0].src;
  div1.append(img1);
}

newNewButton.addEventListener('click', listenIMG);


const newNewButton1 = document.createElement('button');

newNewButton1.textContent = 'add new images (custom value)';
div2.append(newNewButton1);



function listenIMG1 (){
  const j = prompt()
  for(let i=0; i<j; i++){
    const img1 = document.createElement('img');
    img1.src = document.images[0].src;
    div1.append(img1);
  }
}

newNewButton1.addEventListener('click', listenIMG1);