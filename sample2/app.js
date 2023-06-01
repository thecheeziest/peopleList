import {obj} from './module/data.js'

const btn = document.querySelectorAll('button');
const ul = document.querySelector('.con-box ul');

const showList = () => {
  const newObj = obj.map(item => {
    const {name, job, tel, picURL, like} = item;
    return `
    <li>
    <div class="pic"> <img src="${picURL}" alt=""> </div>
    <div class="pro">
      <p><strong>${name}</strong></p>
      <p>${job}</p>
      <p>${tel}</p>
    </div>
    <span class="iconify" data-icon="ph:heart-${like}"></span>
  </li>`
  }).join('');
  ul.innerHTML = newObj;
};

btn.forEach( item => {
  if (item.classList.contains('show')) {
    item.addEventListener('click', e => {
      showList();
    });
  } else {
    item.addEventListener('click', e => {
      ul.innerHTML = '';
    });
  };
});