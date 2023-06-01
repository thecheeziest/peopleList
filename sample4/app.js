import {obj} from './module/data.js'
import showList from './module/showObj.js'
import get from './module/getEle.js'

const del = get('.del');
const show = get('.show');
const ul = get('.con-box ul');

show.addEventListener('click', e => ul.innerHTML = showList(obj));
del.addEventListener('click', e => ul.innerHTML = '');


