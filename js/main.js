'use strict';


// get html element
function getElement(selector) {
  return document.querySelector(selector);
}


// bmkData objects

const bmkData_1 = {
  url: 'https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion',
  desc: 'JS en los materiales de Adalab',
  seen: true,
  tag_1: '', // javascript
  tag_2: '', // HTML
}

const bmkData_2 = {
  url: 'https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/',
  desc: 'Ideas de proyectos JS',
  seen: true,
  tag_1: 'javascript',
  tag_2: 'portfolio',
}

const bmkData_3 = {
  url: 'https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web',
  desc: 'HTML en los materiales de Adalab',
  seen: false,
  tag_1: 'HTML',
  tag_2: 'CSS',
}


// paint html

function renderTags(tag_1, tag_2) {
  let htmlTags = '';

  if (tag_1 === '' && tag_2 === '') {
    htmlTags = '<p class="item__tags">No tiene categorías</p>';
  } else {
    htmlTags = `<ul class="item__tags">
        <li class="item__tag">${tag_1.toLowerCase()}</li>
        <li class="item__tag">${tag_2.toLowerCase()}</li>
      </ul>`;
  }

  return htmlTags;
}

function renderBookmark(url, desc, seen, tag_1, tag_2) {
  const htmlTags = renderTags(tag_1, tag_2);

  const htmlSeen = seen ? 'checked' : '';

  const htmlBookmark = `<li class="data__listitem">
    <article class="data__item">
      <p class="item__url">
        <a href="${url}" target="_blank" rel="noopener noreferrer">${url.replace('https://', '')}</a>
      </p>
      <p class="item__seen">
        <input type="checkbox" ${htmlSeen} name="item_imp_2" id="item_imp_2">
      </p>
      <p class="item__desc">${desc}</p>
      ${htmlTags}
    </article>
  </li>`;

  return htmlBookmark;
}

let html = renderBookmark(bmkData_1.url, bmkData_1.desc, bmkData_1.seen, bmkData_1.tag_1, bmkData_1.tag_2);
html += renderBookmark(bmkData_2.url, bmkData_2.desc, bmkData_2.seen, bmkData_2.tag_1, bmkData_2.tag_2);
html += renderBookmark(bmkData_3.url, bmkData_3.desc, bmkData_3.seen, bmkData_3.tag_1, bmkData_3.tag_2);

const bookmarks = getElement('.js-data__list');
bookmarks.innerHTML = html;


// display new bookmark form

const newBookmarkElement = getElement('.js-data-actions');

newBookmarkElement.addEventListener('click', handlerClickNewBookmark);

function handlerClickNewBookmark(event) {
  event.currentTarget.classList.remove('hidden');
}


// display burger menu

const burgerElement = getElement('.js-header__menulink');

burgerElement.addEventListener('click', handlerClickBurgerElement);

function handlerClickBurgerElement(event) {
  event.preventDefault();
  const menu = getElement('.js-menudropdown');
  menu.classList.toggle('collapsed');
}


// change tableview -> listview & listview -> tableview

const listviewButtonElement = getElement('.js-button-listview');
const tableviewButtonElement = getElement('.js-button-tableview');
const data = getElement('.js-data');

listviewButtonElement.addEventListener('click', handlerClickListview);
tableviewButtonElement.addEventListener('click', handlerClickTableview);

function handlerClickListview(event) {
  event.preventDefault();

  listviewButtonElement.classList.add('selected');
  tableviewButtonElement.classList.remove('selected');

  data.classList.remove('tableview');
  data.classList.add('listview');
}

function handlerClickTableview(event) {
  event.preventDefault();

  tableviewButtonElement.classList.add('selected');
  listviewButtonElement.classList.remove('selected');

  data.classList.remove('listview');
  data.classList.add('tableview');
}