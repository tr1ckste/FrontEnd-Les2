'use strict';

const container = document.querySelector('.problem');
const headline = container.querySelector('.headline');
const TANK_NAME = window.location.hash.slice(1);
const info = tanks.find(tank => tank.name === TANK_NAME);

const { name, country, level, damage, breoning, ammunition, attackSpeed } = info;

headline.querySelector('img').src = './img/countries/' + country + '.png';
headline.querySelector('h2').innerText = `${name.toUpperCase()} (level ${level})`;

const details = container.querySelector('.details');
const divs = details.querySelectorAll('div');
const img = divs[0].querySelector('img');
img.src = './img/tanks/' + name + '.png';

const table = divs[divs.length - 1].querySelector('table');

const copy = Object.assign(info);
delete copy.name;
delete copy.country;

for (const [ key, value ] of Object.entries(copy)) {
  const tr = document.createElement('tr');
  table.appendChild(tr);
  const tdKey = document.createElement('td');
  tdKey.innerText = key;
  tr.appendChild(tdKey);
  const tdValue = document.createElement('td');
  tdValue.innerText = value;
  tr.appendChild(tdValue);
}
