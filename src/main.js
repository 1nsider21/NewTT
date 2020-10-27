'use strict';

const cube = document.querySelector('.cube');
const cubeContainer = document.querySelector('.cube-container');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
  cubeContainer.classList.toggle('zindex');
});

const rotateY = () => {
  cube.classList.toggle('rotateY');
};

cube.addEventListener('click', rotateY);
