import {obj} from './module/data.js'
import showList from './module/showObj.js'

const btn = document.querySelectorAll('button');
const ul = document.querySelector('.con-box ul');

btn.forEach( item => {
  if (item.classList.contains('show')) {
    item.addEventListener('click', e => {
      ul.innerHTML = showList(obj);
    });
  } else {
    item.addEventListener('click', e => {
      ul.innerHTML = '';
    });
  };
});