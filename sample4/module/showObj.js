const showList = (obj) => {
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
  return newObj;
};

export default showList