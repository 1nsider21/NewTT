'use strict';

const cube = document.querySelector('.cube');

const rotate = () => {
  const rotateY = 180;

  cube.style.transform = `rotateY(${rotateY}deg)`;
};

cube.addEventListener('click', rotate);
