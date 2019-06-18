// Your code goes here
const mainHeader = document.querySelector('.main-navigation');
mainHeader.addEventListener('mouseover', event => {
  event.target.style.background = 'lightblue';

});

mainHeader.addEventListener('mouseleave', event => {
  event.target.style.background = 'lightgray';  event.stopImmediatePropagation();
});

const transition = document.querySelectorAll('.img-content');
transition[0].addEventListener('animationstart', event => {
  console.log('Animation started');
});

const animEnd = document.querySelectorAll('.img-content');
animEnd[0].addEventListener('animationend', event => {
  event.stopPropagation()
  console.log('Animation finished');
});

const signUp = document.querySelectorAll('.btn');
for (let i = 0; i < signUp.length; i++){
  signUp[i].addEventListener('click', event => {
    alert('You signed up!');
  })
}

const content = document.querySelector('.content-section');
content.addEventListener('mouseover', event => {
  event.target.style.background = 'red';
});

content.addEventListener('mouseleave', event => {
  event.target.style.background = 'white';
});

const subContent = document.querySelector('.text-content');
subContent.addEventListener('mouseleave', event => {
  event.target.style.background = 'white';
});

const focusEx = document.querySelectorAll('.destination');

for(let i = 0; i < focusEx.length; i ++){
  focusEx[i].addEventListener('mousedown', event => {
    event.target.style.border = '3px solid pink';
  })
}




