'use strict';


// links info

const link1_url = 'https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion';
const link2_url = 'https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/';
const link3_url = 'https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web';

const link1_desc = 'JS en los materiales de Adalab';
const link2_desc = 'Ideas de proyectos JS';
const link3_desc = 'HTML en los materiales de Adalab';


// BONUS: tags

const link1_tag1 = ''; // javascript
const link1_tag2 = ''; // HTML
const link2_tag1 = 'javascript';
const link2_tag2 = 'portfolio';
const link3_tag1 = 'HTML';
const link3_tag2 = 'CSS';

const no_tags = '<p class="item__tags">No tiene categorías</p>';

let link1_tags = `<ul class="item__tags">
        <li class="item__tag">${link1_tag1.toLowerCase()}</li>
        <li class="item__tag">${link1_tag2.toLowerCase()}</li>
    </ul>`;

let link2_tags = `<ul class="item__tags">
        <li class="item__tag">${link2_tag1.toLowerCase()}</li>
        <li class="item__tag">${link2_tag2.toLowerCase()}</li>
    </ul>`;

let link3_tags = `<ul class="item__tags">
        <li class="item__tag">${link3_tag1.toLowerCase()}</li>
        <li class="item__tag">${link3_tag2.toLowerCase()}</li>
    </ul>`;

if ((link1_tag1 === '') && (link1_tag2 === '')) {
    link1_tags = no_tags;
}

if ((link2_tag1 === '') && (link2_tag2 === '')) {
    link2_tags = no_tags;
}

if ((link3_tag1 === '') && (link3_tag2 === '')) {
    link3_tags = no_tags;
}


// BONUS: checkbox

const link1_checked = true;
const link2_checked = true;
const link3_checked = false;

const checked1 = link1_checked === true ? 'checked' : '';
const checked2 = link2_checked === true ? 'checked' : '';
const checked3 = link3_checked === true ? 'checked' : '';


// build links

const link1 = `<p class="item__url">
        <a href="${link1_url}" target="_blank" rel="noopener noreferrer">${link1_url.replace('https://', '')}</a>
    </p>
    <p class="item__seen">
        <input type="checkbox" ${checked1} name="item_imp_2" id="item_imp_2">
    </p>
    <p class="item__desc">${link1_desc}</p>
    ${link1_tags}`;

const link2 = `<p class="item__url">
        <a href="${link2_url}" target="_blank">${link2_url.replace('https://','')}</a>
    </p>
    <p class="item__seen">
        <input type="checkbox" ${checked2} name="item_imp_1" id="item_imp_1">
    </p>
    <p class="item__desc">${link2_desc}</p>
    ${link2_tags}`;

const link3 = `<p class="item__url">
        <a href="${link3_url}" target="_blank" rel="noopener noreferrer">${link3_url.replace('https://', '')}</a>
    </p>
    <p class="item__seen">
        <input type="checkbox" ${checked3} name="item_imp_2" id="item_imp_2">
    </p>
    <p class="item__desc">${link3_desc}</p>
    ${link3_tags}`;

let html = '';


// search "materiales"

const input_search_desc = document.querySelector('.js-data-search__tag');
input_search_desc.value = 'materiales';
const descrSearchText = input_search_desc.value;

if (link1_desc.includes(descrSearchText) === true) {
    html += `<li class="data__listitem"><article class="data__item">${link1}</article></li>`;
}

if (link2_desc.includes(descrSearchText) === true) {
    html += `<li class="data__listitem"><article class="data__item">${link2}</article></li>`;
}

if (link3_desc.includes(descrSearchText) === true) {
    html += `<li class="data__listitem"><article class="data__item">${link3}</article></li>`;
}

const listLinks = document.querySelector('.js-data__list');
listLinks.innerHTML = html;


// display new bookmark form

const section = document.querySelector('.js-data-actions');

section.addEventListener('click', showAddForm);

function showAddForm() {
    section.classList.remove('hidden');
}


// display burger menu

const burgerElement = document.querySelector('.js-header__menulink');
const menu = document.querySelector('.js-menudropdown');

burgerElement.addEventListener('click', handlerClickLinkDropdown);

function handlerClickLinkDropdown(event) {
    event.preventDefault();

    menu.classList.toggle('collapsed');
}


// change tableview -> listview & listview -> tableview

const listviewButtonElement = document.querySelector('.js-button-listview');
const tableviewButtonElement = document.querySelector('.js-button-tableview');
const data = document.querySelector('.js-data');

listviewButtonElement.addEventListener('click', handlerListviewClick);
tableviewButtonElement.addEventListener('click', handlerTableviewClick);

function handlerListviewClick(event) {
    event.preventDefault();

    listviewButtonElement.classList.add('selected');
    tableviewButtonElement.classList.remove('selected');

    data.classList.remove('tableview');
    data.classList.add('listview');
}

function handlerTableviewClick(event) {
    event.preventDefault();

    tableviewButtonElement.classList.add('selected');
    listviewButtonElement.classList.remove('selected');

    data.classList.remove('listview');
    data.classList.add('tableview');
}