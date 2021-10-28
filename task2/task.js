'use strict';

const container = document.querySelector('.tanks');

const createTank = name => {
  const tank = document.createElement('div');
  const info = tanks.find(el => el.name === name);
  console.log(tanks.find(el => el.name === name));
  console.log(name)
  tank.className = 'tank flex';
  const tankImg = document.createElement('img');
  tankImg.src = './img/tanks/' + name + '.png';
  tank.appendChild(tankImg);
  const sign = document.createElement('div');
  sign.className = 'sign flex';
  tank.appendChild(sign);
  const level = document.createElement('p');
  level.innerText = info.level;
  sign.appendChild(level);
  const country = document.createElement('img');
  country.src = './img/countries/' + info.country + '.png';
  sign.appendChild(country);
  const nameP = document.createElement('p');
  nameP.className = 'tankName';
  nameP.innerText = name;
  sign.appendChild(nameP);
  return tank;
}

for (const tank of tanks) {
  container.appendChild(createTank(tank.name));
}

document.querySelectorAll('.tank')
  .forEach(tank => tank.addEventListener('click', () => {
    const sign = tank.querySelector('.sign');
    const name = sign.querySelector('.tankName').innerHTML;
    window.location.href = './details.html#' + name;
  }))
