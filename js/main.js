'use strict';


// get html element
function getElement(selector) {
  return document.querySelector(selector);
}


// array of objects

const bmkData = [{
    url: 'https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion',
    desc: 'JS en los materiales de Adalab',
    seen: true,
    tags: [], // 'javascript', 'HTML'
  },
  {
    url: 'https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/',
    desc: 'Ideas de proyectos JS',
    seen: true,
    tags: ['javascript', 'portfolio']
  },
  {
    url: 'https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web',
    desc: 'HTML en los materiales de Adalab',
    seen: false,
    tags: ['HTML', 'CSS'],
  }
];


// paint html

function renderTags(tags) {
  let htmlTags = '';

  if (tags.length === 0) {
    htmlTags = '<p class="item__tags">No tiene categorías</p>';
  } else {
    htmlTags = '<ul class="item__tags">';
    for (const tag of tags) {
      htmlTags += `<li class="item__tag">${tag.toLowerCase()}</li>`;
    }
    htmlTags += '</ul>';
  }

  return htmlTags;
}

function renderBookmark(url, desc, seen, tags) {
  const htmlTags = renderTags(tags);

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

let html = '';
for (const bookmark of bmkData) {
  html += renderBookmark(bookmark.url, bookmark.desc, bookmark.seen, bookmark.tags);
}

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